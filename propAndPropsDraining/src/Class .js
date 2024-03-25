import React from 'react'
import'./Class.css'

const Class  = () => {

    const handleClick = () => {
        console.log("I was Clicked!!!")
    }

  return (
    <div className='class'>
        <p>Zainab must be a hero</p>
        <button onClick={handleClick}Click me>Click</button>
      
    </div>
  )
}

export default Class 



