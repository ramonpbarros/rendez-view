import React, { useState, useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
import API from "../utils/API/Cocktail";
import { useParams } from "react-router-dom";

function OneCocktailCategory() {
  const { name } = useParams();
  const [state, setState] = useState([]);

  useEffect(() => {
    API.getAlcohol(name)
      .then((res) =>
        setState(
          res.data.drinks.map((res) => ({
            id: res.idDrink,
            name: res.strDrink,
            image: res.strDrinkThumb
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
          link={`/cocktailcategory/${name}/${item.id}`}
        />
      );
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div
          className="jumbotron container"
          style={{
            backgroundColor: "white",
            paddingBottom: 0,
            marginBottom: 0
          }}
        >
          <h1
            className="display-4"
            style={{ color: "#f54c4c", fontWeight: "bold" }}
          >
            {decodeURIComponent(name)} Choices
          </h1>
          <hr className="my-4" />
        </div>
      </div>
      <div className="row">{renderCategories()}</div>;
    </div>
  );
}

export default OneCocktailCategory;
