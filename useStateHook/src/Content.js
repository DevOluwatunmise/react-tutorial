import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import "./content.css";

const Content = () => {
  // const [name, setName] = useState('Basirah')     //will set initial state to be Basirah, this is example of useState, set name will be changing other name
  const [item, setItem] = useState([
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

  // const handleNameChange = () => {
  //     const names = ["Oluwatunmise","fulaani", "ooye", "Eef"];
  //     const int = Math.floor(Math.random() * 3);
  //     setName(names[int]);
  // };

  // const handleClick2 = (name) => {
  //   console.log(`${name} was clicked`)
  // }

  return (
    <main className="student">
      {/* <h1>{name}</h1>
      <button onClick={handleNameChange}>Change Name</button>
       <button onClick={handleClick}>Click me</button>   {/* then you will write it like this under return so that it will show */}
      {/* <button onDoubleClick={() => handleClick2('Hayzed')}>Click me</button>   */}{" "}

      <ul>
        {item.map((item) => {
          return (
            <li className="item" key={item.id}>
              <input type="checkbox" checked={item.checked} />

              <label>{item.item}</label>
              <FaTrash/>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Content;
