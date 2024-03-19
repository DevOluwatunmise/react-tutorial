import React from 'react'

const Footer = () => {
    const currenYear = new Date();
  return (
    <footer>
      <p>Copyright &copy; {currenYear.getFullYear()} </p>
    </footer>
  )
}

export default Footer
