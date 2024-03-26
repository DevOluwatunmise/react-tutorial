import React from 'react'
import {FaPlus} from 'react-icons/fa6'
import { useRef } from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}> 
        <label htmlFor='addItem'>
            Add Item
        </label>

        <input 
        autoFocus
        ref={inputRef}
        type='text'        
        id='addItem'
        placeholder='add Item'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        />

        <button 
        type='submit'
        aria-label='Add Item'
        onChange={() => inputRef.current.focus}
        
        >

        <FaPlus/>
            
        </button>

    </form>
  )
}

export default AddItem
