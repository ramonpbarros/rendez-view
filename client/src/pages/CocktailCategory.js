import React, { useState, useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
import API from "../utils/API/Cocktail";
import { v4 as uuidv4 } from "uuid";

function CocktailCategory() {
  const [state, setState] = useState([]);
  useEffect(() => {
    API.getAlcoholCategories()
      .then((res) =>
        setState(
          res.data.drinks.map((res) => ({
            id: uuidv4(),
            name: res.strIngredient1,
            image: `https://www.thecocktaildb.com/images/ingredients/${res.strIngredient1}-Medium.png`,
          }))
        )
      )
      .catch((err) => console.log(err));
  }, []);
  function renderCategories() {
    return state.map((item) => {
      return <CategoryCard key={item.id} name={item.name} image={item.image} />;
    });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2>Drink Categories</h2>
        </div>
      </div>
      <div className="row">{renderCategories()}</div>;
    </div>
  );
}
export default CocktailCategory;
