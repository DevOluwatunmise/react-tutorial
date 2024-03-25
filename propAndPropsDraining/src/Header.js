import React from 'react'

const Header = ({title}) => {
// ******* Saving inline style invariable **********//
  // const headerStyle = {
  //   background: "royalblue",
  //   color: "goldenrod",
  //   fontSizee: "30px"
  // }

  return (
    <header>
      <h1>{title}</h1>
    </header>

    // Using variable in inline style
    // <header style={headerStyle}>
    //   <h1>Cohort 4.0 Student's Details.</h1>
    // </header>

    // Direct inline styling
    // <header style={{background: "blue", color: "red", fontSize: "24"}}>
    //   <h1>Cohort 4.0 Student's Details.</h1>
    // </header>
  )
}

Header.defaultProps = {
  title: "Deafault Title"
}

export default Header
