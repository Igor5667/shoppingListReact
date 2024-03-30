import React, { useState } from 'react'

function ListItem({id,name,remove}){
    const [value, setValue] = useState(name)
    return(
        <li>
            <input type="text" value={value} onChange={(e)=>{
                setValue(e.target.value)
            }}/>
            <button onClick={()=>{remove(id)}}>🗑️</button>
            <button>☰</button>
        </li>
    )
}
export default ListItem