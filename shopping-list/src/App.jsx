import { useState } from 'react'
import ListItem from './components/ListItem'
import './App.css'

const itemsInital= [
  {id: 1, name: "banan"},
  {id: 2, name: "głuszka"},
  {id: 3, name: "kopeć"},
  {id: 4, name: "młyn"},
]


function App() {
  const [items, setItems] = useState(itemsInital)

  function remove(id){
    console.log(id)
    setItems(items.filter(item=> item.id !== id))
  }

  return (
    <>
      <h3>🛒 My shopping list 🛒</h3>
      <ul>
        {items.map((item)=>
          <ListItem key={item.id} remove={remove} id={item.id} name={item.name}/>)
        }
      </ul>
    </>
  )
}

export default App
