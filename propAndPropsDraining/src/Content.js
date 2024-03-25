import { IoMdTrash } from "react-icons/io";

import "./content.css";

const Content = ({items, handleCheck, handleDelete}) => {
  // const [name, setName] = useState('Basirah')     //will set initial state to be Basirah, this is example of useState, set name will be changing other name
 

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
