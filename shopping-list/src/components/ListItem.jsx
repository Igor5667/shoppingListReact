import React, { useState } from 'react'

function ListItem(props){
    const [value, setValue] = useState(props.item)
    return(
        <li>
            <input type="text" value={value} onChange={(e)=>{
                setValue(e.target.value)
            }}/>
            <button id={props.index} onClick={(e)=>{props.remove(Number(e.target.id))}}>🗑️</button>
            <button>☰</button>
        </li>
    )
}
export default ListItem