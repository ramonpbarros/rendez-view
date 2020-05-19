import React, { useState, useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
import API from "../utils/API/Cocktail";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";

function OneCocktailCategory() {
  const { name } = useParams();
  const [state, setState] = useState([]);
  useEffect(() => {
    console.log(name);
    // API.getAlcohol(name)
    //   .then((res) =>
    //     setState(
    //       res.data.drinks.map((res) => ({
    //         id: uuidv4(),
    //         name: res.strDrink,
    //         image: res.strDrinkThumb,
    //       }))
    //     )
    //   )
    //   .catch((err) => console.log(err));
  }, [name]);
  function renderCategories() {
    return state.map((item) => {
      return (
        <CategoryCard
          key={item.id}
          name={item.name}
          image={item.image}
          // link={"/cocktailcategory/" + item.name}
        />
      );
    });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h2>Drink Categories </h2>
        </div>
      </div>
      <div className="row">{renderCategories()}</div>;
    </div>
  );
}
export default OneCocktailCategory;
