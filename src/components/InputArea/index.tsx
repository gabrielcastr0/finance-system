import { Item } from '../../types/Item';
import * as Styled from './styled';

type Props = {
  onAdd: (item: Item) => void;
}

export const InputArea = ({onAdd}: Props) => {

  const handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(2022, 6, 18),
      category: 'food',
      title: 'Comida',
      value: 250.25
    }

    onAdd(newItem);
  }
  
  return(
    <Styled.Container>
      <button onClick={handleAddEvent}>+ Adicionar</button>
    </Styled.Container>
  );
}