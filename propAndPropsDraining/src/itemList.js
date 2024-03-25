import React from 'react'
import { IoMdTrash } from "react-icons/io";

const itemList = () => {
  return (
    <ul>
    {items.map((item) => {
      return (
        <li className="item" key={item.id}>
          <input type="checkbox" 
          onClick={() => handleCheck(item.id)}  // this code make the box cliceable and show key and number in the console(anonymus function)
          checked={item.checked} />
          

          <label
          style={(item.checked) ? {textDecoration: "line-through"} : null}
          onDoubleClick={() => handleDelete(item.id)}
          >{item.item}</label>
          <IoMdTrash
          onClick={() => handleDelete(item.id)}   // to make it delete, we put the anonymus funtion inside the trash icon 
          role="button"
          tabIndex="0"
          />
        </li>
      );
    })}
  </ul>
  )
}

export default itemList
