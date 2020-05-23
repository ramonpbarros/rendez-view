import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import API from "../utils/API/Food";
import { FaArrowCircleLeft } from "react-icons/fa";
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
      <div
          className="jumbotron container"
          style={{
            backgroundColor: "white",
            paddingBottom: 0,
            marginBottom: 0
          }}
        >
          <div className="mr-3 zoom1" style={{ float: "left" }}>
            <Link style={{ color: "#f54c4c" }} to="/foodcategory">
              <FaArrowCircleLeft size={58} />
            </Link>
          </div>
          <h1
            className="display-4"
            style={{ color: "#f54c4c", fontWeight: "bold" }}
          >
            {name} Recipes
          </h1>
          <hr className="my-4" />
        </div>
        <div className="col-sm-3"></div>
      </div>
      <div className="row">{renderCategories()}</div>
    </div>
  );
}
export default OneFoodCategory;
