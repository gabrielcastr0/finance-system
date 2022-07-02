import {useState, useEffect} from 'react';
import * as Styled from './App.styled';
import {Item} from './types/Item';
import {TableArea} from './components/TableArea';
import {InfoArea} from './components/InfoArea';
import {InputArea} from './components/InputArea';
import {Modal} from './components/Modal';

import {categories} from './data/categories';
import {filterListByMonth, getCurrentMonth} from './helpers/dateFilter';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  
  useEffect(()=>{
    const storageArray: any = localStorage.getItem("myFinances");
    const parseArray: any = JSON.parse(storageArray);
    const formatArray: any = parseArray?.map((item: any) => {
      item.date = new Date(item.date);
      return item;
    })
    setList(formatArray);
  }, [])

  useEffect(()=>{
    console.log(list);
  }, [list])

  useEffect(()=>{
    if(list !== undefined){
      setFilteredList( filterListByMonth(list, currentMonth) );
    }
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

  const handleShowModal = () => {
    setShowModal(!showModal);
  }

  const handleAddItem = (item: Item) => {
    window.location.reload();

    const newItem = {
      date: new Date(),
      category: item.category,
      title: item.title,
      value: parseFloat(item.value.toFixed(2))
    };

    let newList: any = [];

    newList.push(newItem);
    localStorage.setItem("myFinances",JSON.stringify(newList));

    if(list.length > 0){
      newList = list;
    }

    newList.push(newItem);
    localStorage.setItem("myFinances",JSON.stringify(newList));
    setList(newList);

    setFilteredList( filterListByMonth(newList, currentMonth) );

    handleShowModal();
  }

  const handleDeleteItem = (title: string) => {
    window.location.reload();

    let newlist: Item[] = list.filter((item: Item) => {
      if (item.title !== title)
        return item;
    });

    console.log(list);

    localStorage.setItem("myFinances", JSON.stringify(newlist));
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

        <InputArea onAdd={handleShowModal}/>

        {showModal &&
          <Modal
            onShowModal={handleShowModal}
            onAddItem={handleAddItem}
          />
        }

        <TableArea list={filteredList} onDeleteItem={handleDeleteItem}/>
      </Styled.Body>
    </Styled.Container>
  )
}

export default App;