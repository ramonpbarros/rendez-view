import React, { useState, useEffect } from "react";
import API from "../../utils/API/Plan";
import APIC from "../../utils/API/Cocktail";

function TableRow(props) {
  console.log(props);
  const [cocktailState, setCocktailState] = useState([]);
  const [modalState, setModalState] = useState();
  const [cocktail, setCocktail] = useState();
  const [meal, setMeal] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showModal]);

  function fetchCocktail() {
    setShowModal(true);
    APIC.getOneCocktail(props.cocktail)
      .then((res) => {
        const [drink] = res.data.drinks;
        setCocktail({
          id: drink.idDrink,
          name: drink.strDrink,
          image: drink.strDrinkThumb,
          instruction: drink.strInstructions,
          ingredient1: drink.strIngredient1,
          ingredient2: drink.strIngredient2,
          ingredient3: drink.strIngredient3,
          ingredient4: drink.strIngredient4,
          ingredient5: drink.strIngredient5,
          ingredient6: drink.strIngredient6,
          measure1: drink.strMeasure1,
          measure2: drink.strMeasure2,
          measure3: drink.strMeasure3,
          measure4: drink.strMeasure4,
          measure5: drink.strMeasure5,
          measure6: drink.strMeasure6
        });
      })
      .catch((err) => console.log(err));
  }

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
        <strong className="mr-2">Name:</strong>
        {props.name}
        <hr />
        <strong className="mr-2">Drink:</strong>
        {props.cocktail}
        <hr />
        <strong className="mr-2">Meal:</strong>
        {props.meal}
        <div className="mt-3 col text-center">
          <button
            type="button"
            className="btn btn-outline-success btn-sm mr-2"
            onClick={fetchCocktail}
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
      <hr />
      {showModal && (
        <React.Fragment>
          <div
            className="modal show"
            style={{ display: "block" }}
            tabIndex="-1"
            role="dialog"
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
                    onClick={() => {
                      setShowModal(false);
                    }}
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  {cocktail ? (
                    <ModalDetail cocktail={cocktail} />
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

function ModalDetail(props) {
  const { cocktail } = props;
  return (
    <div>
      <img src={cocktail.image} alt="cocktailImg" style={{ width: "100%" }} />
      <hr />
      <h3>{cocktail.name}</h3>
      <p>
        <strong>Ingredients:</strong>
      </p>
      <p>
        {cocktail.measure1} {cocktail.ingredient1}
      </p>
      <p>
        {cocktail.measure2} {cocktail.ingredient2}
      </p>
      <p>
        {cocktail.measure3} {cocktail.ingredient3}
      </p>
      <p>
        {cocktail.measure4} {cocktail.ingredient4}
      </p>
      <p>
        {cocktail.measure5} {cocktail.ingredient5}
      </p>
      <p>
        {cocktail.measure6} {cocktail.ingredient6}
      </p>
      <hr />
      <p>
        <strong>Instruction:</strong>
      </p>
      <p>{cocktail.instruction}</p>
    </div>
  );
}

export default TableRow;
