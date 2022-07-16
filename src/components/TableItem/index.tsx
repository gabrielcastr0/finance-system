import * as Styled from './styled';
import {Item} from '../../types/Item';
import {formatDate} from '../../helpers/dateFilter';
import {categories} from '../../data/categories';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

type Props = {
  item: Item;
  handleDeleteItem: (str: string) => void;
}

export const TableItem = ({item, handleDeleteItem }: Props) => {
  const onDeleteItem = ({title} : Item) => {
    handleDeleteItem(title);
};

  return(
    <Styled.TableLine>
      <Styled.TableColumn>{formatDate(item.date)}</Styled.TableColumn>
      <Styled.TableColumn>
        <Styled.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </Styled.Category>
      </Styled.TableColumn>
      <Styled.TableColumn>{item.title}</Styled.TableColumn>
      <Styled.TableColumn>
        <Styled.Value color={categories[item.category].expense ? 'red' : '#00FF00'}>
          R$ {item.value}
        </Styled.Value>
      </Styled.TableColumn>

      <Styled.TableColumn>
        {/* <Styled.ActionButton onClick={() => alert("Em construção...")} type="button">
          <FontAwesomeIcon icon={faPenToSquare} />  
        </Styled.ActionButton>    */}

        <Styled.ActionButton onClick={() => onDeleteItem(item)} type="button">
          <FontAwesomeIcon icon={faTrashCan} color="#fff"/>  
        </Styled.ActionButton>        
      </Styled.TableColumn>
    </Styled.TableLine>
  )
}