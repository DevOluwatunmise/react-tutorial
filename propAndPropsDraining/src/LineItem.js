import { IoMdTrash } from "react-icons/io";

const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className="item" key={item.id}>
    <input type="checkbox" 
    onChange={() => handleCheck(item.id)}  // this code make the box cliceable and show key and number in the console(anonymus function)
    checked={item.checked} />
    

    <label
    style={(item.checked) ? {textDecoration: "line-through"} : null}
    onDoubleClick={() => handleCheck(item.id)}
    >{item.item}</label>
    <IoMdTrash
    onClick={() => handleDelete(item.id)}   // to make it delete, we put the anonymus funtion inside the trash icon 
    role="button"
    tabIndex="0"
    aria-label={"delete ${item.item} "}
    />
  </li>
  )
}

export default LineItem
