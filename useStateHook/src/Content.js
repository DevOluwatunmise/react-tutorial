import { IoMdTrash } from "react-icons/io";
import { useState } from "react";
import "./content.css";

const Content = () => {
  // const [name, setName] = useState('Basirah')     //will set initial state to be Basirah, this is example of useState, set name will be changing other name
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "A bag of Garri",
    },
    {
      id: 2,
      checked: false,
      item: "Rice",
    },
    {
      id: 3,
      checked: false,
      item: "Semo",
    },
    {
      id: 4,
      checked: false,
      item: "Ponmo",
    },
  ]);

  

  const handleCheck = (id) => {
    // console.log(`key: ${id}`)
    const listItems = items.map((item) => 
    item.id === id ? {...item, checked: !item.checked } : item  // read more abpout this line
    
    );
    setItems(listItems)   // it update it from false to true(from initial state{setItems} to useState {listItem})
    localStorage.setItem("shoppinglist", JSON.stringify(listItems))
  };

  const handleDelete = (id) => {    // we are using tinary operator to pass the condition and we filter through
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems)   // we now call it out like this
  }

  return (
    <main className="student">
       

      {items.length ? (
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
      ): (
        <p style={{margingTop: "2rem" }}>Your list is empty</p>
      )
      }
    </main>
  );
};

export default Content;
