import * as Styled from './styled';
import {Item} from '../../types/Item';
import {formatDate} from '../../helpers/dateFilter';

type Props = {
  item: Item;
}

export const TableItem = ({item}: Props) => {
  return(
    <Styled.TableLine>
      <Styled.TableColumn>{formatDate(item.date)}</Styled.TableColumn>
      <Styled.TableColumn>{item.category}</Styled.TableColumn>
      <Styled.TableColumn>{item.title}</Styled.TableColumn>
      <Styled.TableColumn>R$ {item.value}</Styled.TableColumn>
    </Styled.TableLine>
  )
}