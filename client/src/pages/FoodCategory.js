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
            image: res.strCategoryThumb,
          }))
        )
      )
      .catch((err) => console.log(err));
  }, []);
  function renderCategories() {
    return state.map((item) => {
      switch (item.name) {
        case "Beef":
          item.image =
            "https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg";
          break;
        case "Chicken":
          item.image =
            "https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg";
          break;
        case "Dessert":
          item.image =
            "https://www.themealdb.com/images/media/meals/rpvptu1511641092.jpg";
          break;
        case "Lamb":
          item.image =
            "https://www.themealdb.com/images/media/meals/yuwtuu1511295751.jpg";
          break;
        case "Miscellaneous":
          item.image =
            "https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg";
          break;
        case "Pasta":
          item.image =
            "https://www.themealdb.com/images/media/meals/vvtvtr1511180578.jpg";
          break;
        case "Pork":
          item.image =
            "https://www.themealdb.com/images/media/meals/h3ijwo1581013377.jpg";
          break;
        case "Seafood":
          item.image =
            "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg";
          break;
        case "Side":
          item.image =
            "https://www.themealdb.com/images/media/meals/xvrrux1511783685.jpg";
          break;
        case "Starter":
          item.image =
            "https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg";
          break;
        case "Vegan":
          item.image =
            "https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg";
          break;
        case "Vegetarian":
          item.image =
            "https://www.themealdb.com/images/media/meals/ysqrus1487425681.jpg";
          break;
        case "Breakfast":
          item.image =
            "https://www.themealdb.com/images/media/meals/1550440197.jpg";
          break;
      }
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
            marginBottom: 0,
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
