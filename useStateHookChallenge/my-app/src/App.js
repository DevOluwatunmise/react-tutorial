import { useEffect, useState } from "react";
import Form from "./Form";


function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const [reqType, setReqType] = useState('users');
  const [item, setItem] = useState([])

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
     
    </div>
  );
}

export default App;
