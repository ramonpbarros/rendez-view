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
    <React.Fragment>
      <li className="list-group-item">
        <strong className="mr-1">Name:</strong>
        {props.name}
        <hr/>
        <strong className="mr-1">Drink:</strong>
        {props.cocktail}
        <hr/>
        <strong className="mr-1">Meal:</strong>
        {props.meal}
        <div className="mt-3">
          <button
            type="button"
            className="btn btn-outline-success btn-sm mr-2"
            data-toggle="modal"
            data-target="#exampleModalLong"
          >
            Details
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => deletePlan(props.id)}
          >
            Remove
          </button>
        </div>
      </li>
      <hr/>
    </React.Fragment>
  );
}

export default TableRow;
