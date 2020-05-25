import React, { useState, useEffect } from "react";
import API from "../utils/API/Cocktail";
import APIF from "../utils/API/Food";
// import APIP from "../utils/API/Plan";
import APIU from "../utils/API"
import APIM from "../utils/API/Movies"
import RandomDrinkCard from "../components/RandomDrinkCard";
import RandomMealCard from "../components/RandomMealCard";
import RandomMovieCard from "../components/RandomMovieCard";

function RandomPlan() {
  const [randomDrink, setRandomDrink] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);
  const [randomMovie, setRandomMovie] = useState ([])
  const [planName, setPlanName]  = useState("");
  const [buttonText, setButtonText] = useState("Save Plan");

  const changeText = (text) => {
    if (planName.name === ""){
      alert("Please Fill The Required Field")
    } else {
      setButtonText(text)
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    APIU.savePlan({
      name: planName,
      meal: randomMeal[0].m_name,
      cocktail: randomDrink[0].name
    }).then((res) => {
      setPlanName("")
    });
  };

  useEffect(() => {
    APIM.getPopularMovie().then((res) => {
      console.log(res.data)
    })
  })

  useEffect(() => {
    API.getRandom().then((res) => {
      setRandomDrink(
        res.data.drinks.map((res) => ({
          id: res.idDrink,
          name: res.strDrink,
          image: res.strDrinkThumb,
          instruction: res.strInstructions,
          ingredient1: res.strIngredient1,
          ingredient2: res.strIngredient2,
          ingredient3: res.strIngredient3,
          ingredient4: res.strIngredient4,
          ingredient5: res.strIngredient5,
          ingredient6: res.strIngredient6,
          measure1: res.strMeasure1,
          measure2: res.strMeasure2,
          measure3: res.strMeasure3,
          measure4: res.strMeasure4,
          measure5: res.strMeasure5,
          measure6: res.strMeasure6
        }))
      );
    });
  }, []);

  useEffect(() => {
    APIF.getRandom().then((res) => {
      setRandomMeal(
        res.data.meals.map((res) => ({
          m_id: res.idMeal,
          m_name: res.strMeal,
          m_image: res.strMealThumb,
          m_instruction: res.strInstructions,
          m_ingredient1: res.strIngredient1,
          m_ingredient2: res.strIngredient2,
          m_ingredient3: res.strIngredient3,
          m_ingredient4: res.strIngredient4,
          m_ingredient5: res.strIngredient5,
          m_ingredient6: res.strIngredient6,
          m_ingredient7: res.strIngredient7,
          m_ingredient8: res.strIngredient8,
          m_ingredient9: res.strIngredient9,
          m_ingredient10: res.strIngredient10,
          m_ingredient11: res.strIngredient11,
          m_ingredient12: res.strIngredient12,
          m_ingredient13: res.strIngredient13,
          m_ingredient14: res.strIngredient14,
          m_ingredient15: res.strIngredient15,
          m_ingredient16: res.strIngredient16,
          m_measure1: res.strMeasure1,
          m_measure2: res.strMeasure2,
          m_measure3: res.strMeasure3,
          m_measure4: res.strMeasure4,
          m_measure5: res.strMeasure5,
          m_measure6: res.strMeasure6,
          m_measure7: res.strMeasure7,
          m_measure8: res.strMeasure8,
          m_measure9: res.strMeasure9,
          m_measure10: res.strMeasure10,
          m_measure11: res.strMeasure11,
          m_measure12: res.strMeasure12,
          m_measure13: res.strMeasure13,
          m_measure14: res.strMeasure14,
          m_measure15: res.strMeasure15,
          m_measure16: res.strMeasure16
        }))
      );
    });
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <React.Fragment>
      <div
        className="jumbotron container"
        style={{ backgroundColor: "white", paddingBottom: 0, marginBottom: 0 }}
      >
        <h1
          className="display-4"
          style={{ color: "#f54c4c", fontWeight: "bold" }}
        >
          Random Plan!
        </h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <div className="col text-center mt-5">
          <form onSubmit={handleFormSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Plan's name"
                name="name"
                onChange={(e) => setPlanName(e.target.value)}
                value={planName}
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <div className="input-group-append">
                <button
                  className="btn zoom save-btn-custom"
                  type="submit"
                  value="Submit"
                  id="button-addon2"
                  onClick={() => changeText("Plan Saved!")}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          </form>
          <button
            onClick={refreshPage}
            className="btn btn-custom zoom btn-lg m-4"
            href="#" 
          >
            Try Again!
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3">
          {randomDrink.map((item) => {
            return (
              <RandomDrinkCard
                key={item.id}
                name={item.name}
                image={item.image}
                instruction={item.instruction}
                ingredient1={item.ingredient1}
                ingredient2={item.ingredient2}
                ingredient3={item.ingredient3}
                ingredient4={item.ingredient4}
                ingredient5={item.ingredient5}
                ingredient6={item.ingredient6}
                measure1={item.measure1}
                measure2={item.measure2}
                measure3={item.measure3}
                measure4={item.measure4}
                measure5={item.measure5}
                measure6={item.measure6}
              />
            );
          })}
          {randomMeal.map((item) => {
            return (
              <RandomMealCard
                key={item.m_id}
                name={item.m_name}
                image={item.m_image}
                instruction={item.m_instruction}
                ingredient1={item.m_ingredient1}
                ingredient2={item.m_ingredient2}
                ingredient3={item.m_ingredient3}
                ingredient4={item.m_ingredient4}
                ingredient5={item.m_ingredient5}
                ingredient6={item.m_ingredient6}
                ingredient7={item.m_ingredient7}
                ingredient8={item.m_ingredient8}
                ingredient9={item.m_ingredient9}
                ingredient10={item.m_ingredient10}
                ingredient11={item.m_ingredient11}
                ingredient12={item.m_ingredient12}
                ingredient13={item.m_ingredient13}
                ingredient14={item.m_ingredient14}
                ingredient15={item.m_ingredient15}
                ingredient16={item.m_ingredient16}
                measure1={item.m_measure1}
                measure2={item.m_measure2}
                measure3={item.m_measure3}
                measure4={item.m_measure4}
                measure5={item.m_measure5}
                measure6={item.m_measure6}
                measure7={item.m_measure7}
                measure8={item.m_measure8}
                measure9={item.m_measure9}
                measure10={item.m_measure10}
                measure11={item.m_measure11}
                measure12={item.m_measure12}
                measure13={item.m_measure13}
                measure14={item.m_measure14}
                measure15={item.m_measure15}
                measure16={item.m_measure16}
              />
            );
          })}
          <RandomMovieCard />
        </div>
      </div>
    </React.Fragment>
  );
}

export default RandomPlan;
