import {useState, useEffect} from 'react';
import * as Styled from './App.styled';
import {Item} from './types/Item';
import {Category} from './types/Category';
import {TableArea} from './components/TableArea';
import {InfoArea} from './components/InfoArea';
import {InputArea} from './components/InputArea';

import {categories} from './data/categories';
import {items} from './data/items';
import {getCurrentMonth} from './helpers/dateFilter';
import {filterListByMonth} from './helpers/dateFilter';

const App = () => {
  const [list, setList] = useState(items);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;
      }else{
        incomeCount += filteredList[i].value;
      }

      setIncome(incomeCount);
      setExpense(expenseCount);
    }
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return(
    <Styled.Container>
      <Styled.Header>
        <Styled.HeaderText>Finance System</Styled.HeaderText>
      </Styled.Header>

      <Styled.Body>
        <InfoArea 
          currentMonth={currentMonth} 
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem}/>

        <TableArea list={filteredList} />
      </Styled.Body>
    </Styled.Container>
  )
}

export default App;