import { useEffect, useState } from "react";
import {form} from ;


function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com/'
  const [reqType, setreqType] = useState('users');
  const [item, setItem] = useState([])

  useEffect(() => {
    const fetchItems = async() => {

      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const req = await response.json();

        console.log(req)

      }catch(err) {
        console.log(err)
      }
    }
    fetchItems()


  }, [reqType])



  return (
    <div className='App'>
      <form reqType={reqType}/>
     
    </div>
  );
}

export default App;
