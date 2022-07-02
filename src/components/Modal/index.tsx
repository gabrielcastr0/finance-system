import { useEffect, useState } from 'react';
import { categories } from '../../data/categories';
import { items } from '../../data/items';
import { Item } from '../../types/Item';
import * as Styled from './styled';

type Props = {
    onShowModal: () => void;
    onAddItem: ({ title, category, value }: Item) => void;
}

type categorieOption = {
    category: string;
    title?: string;
}

export const Modal = ({ onShowModal, onAddItem }: Props) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [value, setValue] = useState(0);
    const [categoriesOption, setCategoriesOption] = useState<categorieOption[]>([]);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        let newCategories = [];

        for (let i in items) {
            newCategories.push({
                category: items[i].category,
                title: categories[items[i].category].title
            });
        }

        setCategoriesOption(newCategories);
    }

    const closeModal = (e: any) => {
        if (e.target.classList.contains("modal")) {
            onShowModal();
        }
        else {

        }
    }

    const handleAddItem = () => {
        if (validateForm()) {

            const item: Item = {
                title: title,
                category: category,
                value: value,
                date: new Date()
            }

            onAddItem(item);
            onShowModal();
        }
    }

    const validateForm = () => {

        let ok = true;

        if (title == '') {
            ok = false;
            alert("Preencha o título");
        }

        if (category == '') {
            ok = false;
            alert("Selecione a categoria");
        }

        if (value == 0) {
            ok = false;
            alert("informe o valor");
        }

        return ok;
    }

    return (
        <Styled.Container className="modal" onClick={closeModal}>
            <Styled.Content>
                <Styled.Body>
                    <Styled.TitleArea>
                        <Styled.Title>Título</Styled.Title>
                        <Styled.InputTitle
                            title={title}
                            type="text"
                            onChange={e => setTitle(e.target.value)}
                            value={title}
                            placeholder="Digite um título"
                        />
                    </Styled.TitleArea>
                    <Styled.CategoryArea>
                        <Styled.CategoryTitle>Categoria</Styled.CategoryTitle>
                        <Styled.CategorySelect
                            category={category}
                            onChange={e => setCategory(e.target.value)}
                        >
                            <Styled.CategoryOption value="">Selecione uma categoria</Styled.CategoryOption>
                            {categoriesOption.map((item, key) => (
                                <Styled.CategoryOption
                                    key={key}
                                    value={item.category}
                                >{item.title}</Styled.CategoryOption>
                            ))}
                        </Styled.CategorySelect>
                    </Styled.CategoryArea>
                    <Styled.ValueArea>
                        <Styled.ValueText>Valor</Styled.ValueText>
                        <Styled.InputValue
                            price={value}
                            type="number"
                            placeholder="Ex: 23.50"
                            onChange={e => setValue(parseFloat(e.target.value))}
                            value={value}
                        />
                    </Styled.ValueArea>
                </Styled.Body>
                <Styled.Footer>
                    <Styled.BtnAdd
                        onClick={handleAddItem}
                    >Adicionar</Styled.BtnAdd>
                </Styled.Footer>
            </Styled.Content>
        </Styled.Container>
    )
}