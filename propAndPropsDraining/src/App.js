import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";


//Add useEffect
import { useState, useEffect } from "react";
import apiRequest from "./apiRequest";

function App() {
//API

const API_URL ='http://localhost:3500/items'

  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState("");
  const [search, setSearch]= useState('')
  
  const [fetchError, setFetchError] = useState(null);
  // step 6
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
  
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('Did not receive expected data')
        const listItems = await response.json()
        console.log(listItems)
        setItems(listItems)

        setFetchError(null)
      }catch (err) {
        setFetchError(err.message)
      }finally {
        setIsLoading(false);  //step 6
      }
    }
    // step 5

    setTimeout(() => {
      (async () => await fetchItems())()
    }, 2000);
    // step 1 or 2
    // (async () => await fetchItems())()
  }, [])

  
  //  REMOVE THIS ALL
  // const setAndSaveItems = (newItems) => {
  //   setItems(newItems);
    
  // };

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    // setAndSaveItems(listItems); //REMOVE THIS
    setItems(listItems)

    //POST
    const postOptions = {
      method: 'POST',  //method: Specifies the HTTP method as POST.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>item.id === id ? { ...item,
       checked: !item.checked } : item);

    // setAndSaveItems(listItems); //REMOVE THIS
    setItems(listItems); 


    //UPDATE
    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);

    // setAndSaveItems(listItems); //REMOVE THIS
    setItems(listItems); 

  /// Delete////
  const delOption = {
    method: "DELETE"
  }
  const reqUrl = `${API_URL}/${id}`
  const result = await apiRequest(reqUrl, delOption)
  if (result) setFetchError(result)
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);

    setNewItem("");
  };

  return (
    <div className="App">
      {/* <Header title="Welcome to Props👨‍💻" /> */}
      <Header title="Grocery List" />

      <SearchItem search={search} setSearch={setSearch} />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <main className='student'>
        {isLoading && <p>Loading Items...</p>}          {/* step 6 */}

        {fetchError && <p style={{color: "red"}}>{`Error: ${fetchError}`}</p>}
       {!fetchError && !isLoading &&<Content
        items={items.filter((item) =>
          item.item
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />}

      </main>

      <Footer length={items.length} />
    </div>
  );
}

export default App;