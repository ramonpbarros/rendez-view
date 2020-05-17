import React, { useState, useEffect } from "react";
import API from "../utils/API/Cocktail";
import APIF from "../utils/API/Food";
import RandomDrinkCard from "../components/RandomDrinkCard";
import RandomMealCard from "../components/RandomMealCard";

function RandomPlan() {
  const [randomDrink, setRandomDrink] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);

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
      console.log(res.data.meals);
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
          m_measure1: res.strMeasure1,
          m_measure2: res.strMeasure2,
          m_measure3: res.strMeasure3,
          m_measure4: res.strMeasure4,
          m_measure5: res.strMeasure5,
          m_measure6: res.strMeasure6
        }))
      );
    });
  }, []);

  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3">
          {randomDrink.map((item) => {
            return (
              <RandomMealCard
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
              <RandomDrinkCard
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
                measure1={item.m_measure1}
                measure2={item.m_measure2}
                measure3={item.m_measure3}
                measure4={item.m_measure4}
                measure5={item.m_measure5}
                measure6={item.m_measure6}
              />
            );
          })}
          <div className="col mb-4">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RandomPlan;
