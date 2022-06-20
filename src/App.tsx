import {useState, useEffect} from 'react';
import * as Styled from './App.styled';
import {Item} from './types/Item';
import {Category} from './types/Category';
import {TableArea} from './components/TableArea';

import {categories} from './data/categories';
import {items} from './data/items';
import {getCurrentMonth} from './helpers/dateFilter';
import {filterListByMonth} from './helpers/dateFilter';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  return(
    <Styled.Container>
      <Styled.Header>
        <Styled.HeaderText>Finance System</Styled.HeaderText>
      </Styled.Header>

      <Styled.Body>
        {/* Área de informações */}
        {/* Área de inserção */}
        <TableArea list={filteredList} />
      </Styled.Body>
    </Styled.Container>
  )
}

export default App;