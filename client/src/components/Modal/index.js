import React, { useState, useEffect } from "react";
import APIC from "../../utils/API/Cocktail";

function TableRow(props) {
  const [cocktailState, setCocktailState] = useState([]);

  useEffect(() => {
    APIC.getOneCocktail(props.cocktail)
      .then((res) =>
        setCocktailState(
          res.data.drinks.map((res) => ({
            id: res.idDrink,
            name: res.strDrink,
            image: res.strDrinkThumb
          }))
        )
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="exampleModalLong"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {props.name}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TableRow;
