import TableLetter from "./TableLetter";


const TableCell = ({ word }) => {



  return (<td>
    {Array.from(word).map((letter, index) => <TableLetter letter={letter} index={index} key={index} />)}
  </td>);
}

export default TableCell;