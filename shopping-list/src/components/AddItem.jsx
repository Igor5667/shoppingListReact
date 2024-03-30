import React, { useState } from 'react'

function AddItem({add}){
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = () => {
        add(inputValue)
        setInputValue("")
    }

    return(
        <li>
            <input 
                placeholder='Add something to list' 
                value={inputValue} 
                onChange={(e)=>{
                    setInputValue(e.target.value)
                }}
                onKeyDown={(e)=>{
                    e.key === "Enter" && handleSubmit()
                }}
            />
            <button 
                className='add-button' 
                disabled={!inputValue}
                onClick={handleSubmit}
                >
                ＋
            </button>
        </li>
    )
}
export default AddItem