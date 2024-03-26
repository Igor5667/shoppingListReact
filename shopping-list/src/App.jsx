import { useState } from 'react'
import ListItem from './components/ListItem'
import './App.css'

const itemsInital= ['1', '2', '3', '4', '5']


function App() {
  const [items, setItems] = useState(itemsInital)

  function remove(index){
    let tempArr = [...items]
    tempArr.splice(index, 1)
    setItems(tempArr)
  }

  return (
    <>
      <h3>🛒 My shopping list 🛒</h3>
      <ul>
        {items.map((item, index)=><ListItem key={index} item={item} index={index} remove={remove}/> )}
      </ul>
    </>
  )
}

export default App
