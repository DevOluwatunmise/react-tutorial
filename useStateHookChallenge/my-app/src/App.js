import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import Table from "./Table";


function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const [reqType, setReqType] = useState('users');
  const [items, setItem] = useState([])

  useEffect(() => {
    const fetchItems = async() => {

      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const req = await response.json();

        console.log(req)
        setItem(req)

      }catch(err) {
        console.log(err)
      }
    }
    fetchItems()


  }, [reqType])



  return (
    <div className='App'>
      <Form reqType={reqType} setReqType={setReqType}/>
      {/* <List items={items}/> */}
      <Table items={items}/>
     
    </div>
  );
}

export default App;
