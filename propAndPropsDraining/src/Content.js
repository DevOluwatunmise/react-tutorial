import itemList from "./itemList";

import "./content.css";

const Content = ({items, handleCheck, handleDelete}) => {
  // const [name, setName] = useState('Basirah')     //will set initial state to be Basirah, this is example of useState, set name will be changing other name
 

  return (
    <main className="student">
       
      {items.length ? (
        <itemList 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        />
      
      ): (
        <p style={{margingTop: "2rem" }}>Your list is empty</p>
      )
      }
    </main>
  );
};

export default Content;
