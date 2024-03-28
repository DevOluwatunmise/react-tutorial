import { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";


function App() {
  // const name = "Hayzed";

  // const [items, setItems] = useState(
  //   JSON.parse(localStorage.getItem("shoppinglist")) || []);

  ///////   API     //////

  const API_URL = 'http://localhost:3500/items'

  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null)
    

  const [newItem, setNewItem] = useState(""); // anytime we add new item, setNewItem will set the new value or item to the useState empty string
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   console.log("render")
  // })

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(API_URL);

        if(!response.ok) throw Error ('The data is not accessible !')
        const listItem = await response.json();
        console.log(listItem);
        setItems(listItem)

        setFetchError(null)
      }catch (err) {
        setFetchError(err.message)
        // console.log(err.stack)
      }finally{
        setIsLoading(false)
      }
    }


    setTimeout(() => {
     ( async () => await fetchItem())()
    }, 2000);

    (async () => await fetchItem())()
 },[])

  //{
  //     id: 1,
  //     checked: false,
  //     item: "A bag of Garri",
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     item: "Rice",
  //   },
  //   {
  //     id: 3,
  //     checked: false,
  //     item: "Semo",
  //   },
  //   {
  //     id: 4,
  //     checked: false,
  //     item: "Ponmo",
  //   },
  // ]);

  // const setAndSaveItem = (newItems) => {
  //   setItems(newItems);
  //   localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  // };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem]; // spreed the array and add new item
    setItems(listItems);
    // setItems(listItems);
    // localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };
  const handleCheck = (id) => {
    // console.log(`key: ${id}`)
    const listItems = items.map(
      (item) => (item.id === id ? { ...item, checked: !item.checked } : item) // read more abpout this line
    );
    setItems(listItems);
    // setItems(listItems)   // it update it from false to true(from initial state{setItems} to useState {listItem})
    // localStorage.setItem("shoppinglist", JSON.stringify(listItems))
  };

  const handleDelete = (id) => {
    // we are using ternary operator to pass the condition and we filter through
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems); // we now call it out like this
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Welcome to props" />

      <SearchItem search={search} setSearch={setSearch} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <main className="student">
        {isLoading && <p>Loading item...</p>}
        {fetchError && <p style={{color: "red"}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content 
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLocaleLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        // setAndSaveItem={setAndSaveItem}
      />}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
