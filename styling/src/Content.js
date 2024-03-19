import React from 'react'
import './content.css'



const Content = () => {
    const handleNameChange = () => {
        const names = ["Oluwatunmise","fulaani", "ooye", "Eef"];
        const int = Math.floor(Math.random() * 3);
        return names[int];
    };

    const handleClick = () => {   //***  to add click event 
      console.log("You clicked")
    }

    const handleClick2 = (name) => {
      console.log(`${name} was clicked`)
    }

  return (
    <main className='student'>
      <h1>{handleNameChange()}</h1>
       <button onClick={handleClick}>Click me</button>   {/* then you will write it like this under return so that it will show */}
      <button onDoubleClick={() => handleClick2('Hayzed')}>Click me</button>  
    </main>
  )
}

export default Content
