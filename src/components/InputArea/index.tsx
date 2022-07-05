import { Item } from '../../types/Item';
import * as Styled from './styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
      <Styled.AddButton onClick={handleAddEvent}>
        <FontAwesomeIcon icon={faPlus} />Adicionar item
      </Styled.AddButton>
    </Styled.Container>
  );
}