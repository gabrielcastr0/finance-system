import * as Styled from './styled';
import {Item} from '../../types/Item';
import {TableItem} from '../TableItem';
import { useEffect } from 'react';

type Props = {
  list: Item[];
  onDeleteItem: (str: string) => void;
}

export const TableArea = ({list, onDeleteItem }: Props) => {
  useEffect(()=>{
    console.log(list);
  }, [list])

  return(
    <Styled.Table>
      <thead>
        <tr>
          <Styled.TableHeadColumn>Data</Styled.TableHeadColumn>
          <Styled.TableHeadColumn>Categoria</Styled.TableHeadColumn>
          <Styled.TableHeadColumn>Título</Styled.TableHeadColumn>
          <Styled.TableHeadColumn>Valor</Styled.TableHeadColumn>
          <Styled.TableHeadColumn>Ações</Styled.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
          {list.map((item, index)=>(
            <TableItem key={index} item={item} handleDeleteItem={onDeleteItem}/>
          ))}
        </tbody>
    </Styled.Table>
  )
}