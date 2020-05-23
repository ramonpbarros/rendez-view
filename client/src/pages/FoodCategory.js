import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import API from "../utils/API/Food";
import { FaArrowCircleLeft } from "react-icons/fa";

function FoodCategory() {
  const [state, setState] = useState([]);
  useEffect(() => {
    API.getFoodCategories()
      .then((res) =>
        setState(
          res.data.categories.map((res) => ({
            id: res.idCategory,
            name: res.strCategory,
            image: res.strCategoryThumb
          }))
        )
      )
      .catch((err) => console.log(err));
  }, []);
  function renderCategories() {
    return state.map((item) => {
      return (
        <CategoryCard
          key={item.id}
          name={item.name}
          image={item.image}
          link={"/foodcategory/" + item.name}
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
          <div className="mr-3 zoom1 mt-3" style={{ float: "left" }}>
            <Link style={{ color: "#f54c4c" }} to="/profile">
              <FaArrowCircleLeft size={40} />
            </Link>
          </div>
          <h1
            className="display-4"
            style={{ color: "#f54c4c", fontWeight: "bold" }}
          >
            Food Categories
          </h1>
          <hr className="my-4" />
        </div>
      </div>
      <div className="col-sm-2"></div>
      <div className="row">{renderCategories()}</div>
    </div>
  );
}
export default FoodCategory;
