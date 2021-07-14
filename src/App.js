import { useRef, useState } from 'react';
import './App.css';

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
    // let newList = items.map((item)=>{})
    // console.log(items);
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
      <header className='header'>
        <h1>Todo List App</h1>
      </header>
      <div className="addItemContainer">
        <input type="text" ref={inputElement} onChange={(e)=>formHandler(e)} placeholder='Add Item' />
        <button className='button' onClick={()=>handleClick()}>Add</button>
      </div>

      <div className={items.length > 0 ? 'itemList' : ''}>
          {items.map((item, index)=>{
            return(
              <div className="itemContainer" key={index}>
              <span>{item}</span>
              <span class='delete' onClick={()=>deleteItem(index)}>X</span>
              </div>
            )
          })}
      </div>
    </div>
  );
}

export default App;
