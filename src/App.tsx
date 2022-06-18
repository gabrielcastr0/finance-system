import {useState} from 'react';
import * as Styled from './App.styled';
import {Item} from './types/Item';
import {Category} from './types/Category';

import {categories} from './data/categories';
import {items} from './data/items';
import {getCurrentMonth} from './helpers/dateFilter';

const App = () => {
  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  return(
    <Styled.Container>
      <Styled.Header>
        <Styled.HeaderText>Finance System</Styled.HeaderText>
      </Styled.Header>

      <Styled.Body>
        {/* Área de informações */}
        {/* Área de inserção */}
        {/* Tabela de itens */}
      </Styled.Body>
    </Styled.Container>
  )
}

export default App;