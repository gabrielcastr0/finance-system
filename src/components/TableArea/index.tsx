import * as Styled from './styled';
import {Item} from '../../types/Item';
import {TableItem} from '../TableItem';

type Props = {
  list: Item[];
}

export const TableArea = ({list}: Props) => {
  return(
    <Styled.Table>
      <thead>
        <tr>
          <Styled.TableHeadColumn width={100}>Data</Styled.TableHeadColumn>
          <Styled.TableHeadColumn width={130}>Categoria</Styled.TableHeadColumn>
          <Styled.TableHeadColumn>Título</Styled.TableHeadColumn>
          <Styled.TableHeadColumn width={150}>Valor</Styled.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
          {list.map((item, index)=>(
            <TableItem key={index} item={item} />
          ))}
        </tbody>
    </Styled.Table>
  )
}