import ItemList from "./itemList";

import "./content.css";

const Content = ({items, handleCheck, handleDelete}) => {
  // const [name, setName] = useState('Basirah')     //will set initial state to be Basirah, this is example of useState, set name will be changing other name
 

  return (
    <>
       
      {items.length ? (
        <ItemList 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        />
      
      ): (
        <p style={{margingTop: "2rem" }}>Your list is empty</p>
      )
      }
    </>
  );
};

export default Content;
