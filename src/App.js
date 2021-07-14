import { useRef, useState, forwardRef } from 'react';
import './App.css';

import Header from './components/header.component'
import AddItem from './components/addItem.component'
import ItemList from './components/itemList.component'


function App() {

  const [items, setItems] = useState([])
  const [input, setInput] = useState('')
  const inputElement = useRef(null)

  const formHandler = (e) => {
    setInput(e.target.value)
  }

  const handleClick = () => {
    setItems((previousState)=>[...previousState, input])
    setInput('')
    inputElement.current.value = ''
    inputElement.current.focus()

  }
  const deleteItem = (index) => {
    let newItems = []
    for (let i=0; i<items.length; i++) {
      if (i !== index) {
        newItems.push(items[i])
      }
    }
    setItems(newItems)
  }
  return (
    <div className="App">
      <Header title='Todo List App'/>
      <AddItem ref={inputElement} inputChange={(e)=>formHandler(e)} placeholder='Add Item' buttonHandler={()=>handleClick()}/>
      <ItemList items={items} deleteHandler={deleteItem}/>
    </div>
  );
}

export default App;
