import { useState } from 'react'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
import './App.css'
import {v4} from 'uuid'

const itemsInital= [
  {id: v4(), name: "Example item"},
  {id: v4(), name: "Second example item"},
]


function App() {
  const [items, setItems] = useState(itemsInital)

  function remove(id){
    setItems(items.filter(item=> item.id !== id))
    console.log(items)
  }

  function keepChanges(id, value){
    let tempArr = [...items]
    tempArr.forEach(x=>{
      if(x.id==id){
        x.name = value
      }
    })
    setItems(tempArr)
  }

  function add(item){
    let tempArr = [...items]
    tempArr.push({id: v4(), name: item})
    setItems(tempArr)
  }

  return (
    <>
      <h3>🛒 My shopping list 🛒</h3>
      <ul>
        {items.map((x)=>
          <ListItem key={x.id} remove={remove} keepChanges={keepChanges} id={x.id} name={x.name}/>)
        }
        <AddItem add={add}/>
      </ul>
    </>
  )
}

export default App
