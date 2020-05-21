import React from "react";

function TableRow(props) {
  return (
    <tr>
      <td scope="row">
        <strong>{props.name}</strong>
      </td>
      <td>{props.cocktail}</td>
      <td>{props.meal}</td>
      <td className="text-center">
        <button className="btn btn-outline-success btn-sm mr-2">Details</button>
        <button className="btn btn-outline-danger btn-sm">Remove</button>
      </td>
    </tr>
  );
}

export default TableRow;
