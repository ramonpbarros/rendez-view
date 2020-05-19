import React, { useState, useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
import API from "../utils/API/Food";

import { useParams } from "react-router-dom";

function OneFoodCategory() {
  const { name } = useParams();
  // console.log(name);
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
          link={"/"}
        />
      );
    });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2>{name} Recipes</h2>
        </div>
      </div>
      <div className="row">{renderCategories()}</div>;
    </div>
  );
}
export default OneFoodCategory;
