import * as Styled from './styled';
import {Item} from '../../types/Item';
import {formatDate} from '../../helpers/dateFilter';
import {categories} from '../../data/categories';

type Props = {
  item: Item;
}

export const TableItem = ({item}: Props) => {
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
        <Styled.Value color={categories[item.category].expense ? 'red' : 'green'}>
          R$ {item.value}
        </Styled.Value>
      </Styled.TableColumn>
    </Styled.TableLine>
  )
}