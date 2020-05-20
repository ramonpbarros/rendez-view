import React, { useState, useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
import API from "../utils/API/Food";

import { useParams } from "react-router-dom";

function OneFoodCategory() {
  const { name } = useParams();

  const [state, setState] = useState([]);
  useEffect(() => {
    API.getFoodCategory(name)
      .then((res) =>
        setState(
          res.data.meals.map((res) => ({
            id: res.idMeal,
            name: res.strMeal,
            image: res.strMealThumb,
          }))
        )
      )
      .catch((err) => console.log(err));
  }, [name]);
  function renderCategories() {
    return state.map((item) => {
      return (
        <CategoryCard
          key={item.id}
          name={item.name}
          image={item.image}
          link={`/foodcategory/${name}/${item.id}`}
        />
      );
    });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 ml-4">
          <h1>{name} Recipes</h1>
        </div>
      </div>
      <div className="row">{renderCategories()}</div>;
    </div>
  );
}
export default OneFoodCategory;
