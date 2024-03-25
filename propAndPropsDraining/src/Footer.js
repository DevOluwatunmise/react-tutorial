import React from 'react'

const Footer = ({length}) => {
    const currenYear = new Date();
  return (
    <footer>
      <p>{length} List {
        length === 1 ? "item" : "items"
      } </p>
      {/* <p>Copyright &copy; {currenYear.getFullYear()} </p> */}
    </footer>
  );
};

export default Footer
