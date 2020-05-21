import React, { useState, useEffect } from "react";
import API from "../../utils/API/Plan";
import APIC from "../../utils/API/Cocktail";
import APIM from "../../utils/API/Food";

function TableRow(props) {
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

  function onClick() {
    fetchCocktail();
    fetchMeal();
  }

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

  function fetchMeal() {
    setShowModal(true);
    APIM.getOneMeal(props.meal)
      .then((res) => {
        const [meal] = res.data.meals;
        setMeal({
          id: meal.idMeal,
          name: meal.strMeal,
          image: meal.strMealThumb,
          instruction: meal.strInstructions,
          ingredient1: meal.strIngredient1,
          ingredient2: meal.strIngredient2,
          ingredient3: meal.strIngredient3,
          ingredient4: meal.strIngredient4,
          ingredient5: meal.strIngredient5,
          ingredient6: meal.strIngredient6,
          ingredient7: meal.strIngredient7,
          ingredient8: meal.strIngredient8,
          ingredient9: meal.strIngredient9,
          ingredient10: meal.strIngredient10,
          ingredient11: meal.strIngredient11,
          ingredient12: meal.strIngredient12,
          ingredient13: meal.strIngredient13,
          ingredient14: meal.strIngredient14,
          ingredient15: meal.strIngredient15,
          ingredient16: meal.strIngredient16,
          measure1: meal.strMeasure1,
          measure2: meal.strMeasure2,
          measure3: meal.strMeasure3,
          measure4: meal.strMeasure4,
          measure5: meal.strMeasure5,
          measure6: meal.strMeasure6,
          measure7: meal.strMeasure7,
          measure8: meal.strMeasure8,
          measure9: meal.strMeasure9,
          measure10: meal.strMeasure10,
          measure11: meal.strMeasure11,
          measure12: meal.strMeasure12,
          measure13: meal.strMeasure13,
          measure14: meal.strMeasure14,
          measure15: meal.strMeasure15,
          measure16: meal.strMeasure16
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
            onClick={onClick}
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
                    <ModalCocktailDetails cocktail={cocktail} />
                  ) : (
                    <p>Loading...</p>
                  )}
                  {meal ? (
                    <ModalMealDetails meal={meal} />
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

function ModalCocktailDetails(props) {
  const { cocktail } = props;
  return (
    <div>
      <img src={cocktail.image} alt="cocktailImg" style={{ width: "100%" }} />
      <hr />
      <h3>{cocktail.name}</h3>
      <hr/>
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
      <hr/>
    </div>
  );
}

function ModalMealDetails(props) {
  const { meal } = props;
  return (
    <div>
      <img src={meal.image} alt="cocktailImg" style={{ width: "100%" }} />
      <hr />
      <h3>{meal.name}</h3>
      <hr/>
      <p>
        <strong>Ingredients:</strong>
      </p>
      <p>
        {meal.measure1} {meal.ingredient1}
      </p>
      <p>
        {meal.measure2} {meal.ingredient2}
      </p>
      <p>
        {meal.measure3} {meal.ingredient3}
      </p>
      <p>
        {meal.measure4} {meal.ingredient4}
      </p>
      <p>
        {meal.measure5} {meal.ingredient5}
      </p>
      <p>
        {meal.measure6} {meal.ingredient6}
      </p>
      <p>
        {meal.measure7} {meal.ingredient7}
      </p>
      <p>
        {meal.measure8} {meal.ingredient8}
      </p>
      <p>
        {meal.measure9} {meal.ingredient9}
      </p>
      <p>
        {meal.measure10} {meal.ingredient10}
      </p>
      <p>
        {meal.measure11} {meal.ingredient11}
      </p>
      <p>
        {meal.measure12} {meal.ingredient12}
      </p>
      <p>
        {meal.measure13} {meal.ingredient13}
      </p>
      <p>
        {meal.measure14} {meal.ingredient14}
      </p>
      <p>
        {meal.measure15} {meal.ingredient15}
      </p>
      <p>
        {meal.measure16} {meal.ingredient16}
      </p>
      <hr />
      <p>
        <strong>Instruction:</strong>
      </p>
      <p>{meal.instruction}</p>
    </div>
  );
}

export default TableRow;
