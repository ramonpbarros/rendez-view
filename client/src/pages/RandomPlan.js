import React, { useState, useEffect } from "react";
import API from "../utils/API/Cocktail";
import RandomDrinkCard from "../components/RandomDrinkCard";

function RandomPlan() {
  const [randomDrink, setRandomDrink] = useState([]);

  useEffect(() => {
    API.getRandom().then((res) => {
      console.log(res.data.drinks);
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

  return (
    <React.Fragment>
      {randomDrink.map((item) => {
        return (
          <div className="container mt-5" key={item.id}>
            <div className="row row-cols-1 row-cols-md-3">
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
              <div className="col mb-4">
                <div className="card h-100">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a short card.</p>
                  </div>
                </div>
              </div>
              <div className="col mb-4">
                <div className="card h-100">
                  <img src="..." className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default RandomPlan;
