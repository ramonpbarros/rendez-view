import React from "react";
import API from "../../utils/API/Plan";

function TableRow(props) {
  function deletePlan(id) {
    API.deletePlan(id)
      .then((res) => {
        refreshPage();
      })
      .catch((err) => console.log(err));
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <tr>
      <td scope="row">
        <strong>{props.name}</strong>
      </td>
      <td>{props.cocktail}</td>
      <td>{props.meal}</td>
      <td className="text-center">
        <button className="btn btn-outline-success btn-sm mr-2">Details</button>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => deletePlan(props.id)}
        >
          Remove
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
