import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import API from "../utils/API/Cocktail";
import { v4 as uuidv4 } from "uuid";
import { FaArrowCircleLeft } from "react-icons/fa";

function CocktailCategory() {
  const [state, setState] = useState([]);
  useEffect(() => {
    API.getAlcoholCategories()
      .then((res) =>
        setState(
          res.data.drinks.map((res) => ({
            id: uuidv4(),
            name: res.strCategory
          }))
        )
      )
      .catch((err) => console.log(err));
  }, []);
  function renderCategories() {
    return state.map((item) => {
      switch (item.name) {
        case "Cocktail":
          item.image =
            "https://www.thecocktaildb.com/images/media/drink/rptuxy1472669372.jpg";
          break;
        case "Ordinary Drink":
          item.image =
            "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg";
          break;
        case "Cocoa":
          item.image =
            "https://www.thecocktaildb.com/images/media/drink/3nbu4a1487603196.jpg";
          break;
        case "Shot":
          item.image =
            "https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg";
          break;
        case "Homemade Liqueur":
          item.image =
            "https://www.thecocktaildb.com/images/media/drink/swqxuv1472719649.jpg";
          break;
        case "Beer":
          item.image =
            "https://www.thecocktaildb.com/images/media/drink/rwpswp1454511017.jpg";
          break;
        case "Milk / Float / Shake":
          item.image =
            "https://www.thecocktaildb.com/images/media/drink/861tzm1504784164.jpg";
          break;
        case "Other/Unknown":
          item.image =
            "https://www.thecocktaildb.com/images/media/drink/tqxyxx1472719737.jpg";
          break;
        case "Coffee / Tea":
          item.image =
            "https://www.thecocktaildb.com/images/media/drink/sywsqw1439906999.jpg";
          break;
        case "Punch / Party Drink":
          item.image =
            "https://www.thecocktaildb.com/images/media/drink/9a4vqb1493067692.jpg";
          break;
        case "Soft Drink / Soda":
          item.image =
            "https://www.thecocktaildb.com/images/media/drink/uyrvut1479473214.jpg";
          break;
        default:
          item.image =
            "https://www.thecocktaildb.com/images/media/drink/uyrvut1479473214.jpg";
      }
      return (
        <CategoryCard
          key={item.id}
          name={item.name}
          image={item.image}
          link={`/cocktailcategory/${encodeURIComponent(item.name)}`}
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
            <Link style={{ color: "#f54c4c" }} to="/profile">
              <FaArrowCircleLeft size={58} />
            </Link>
          </div>
          <h1
            className="display-4"
            style={{ color: "#f54c4c", fontWeight: "bold" }}
          >
            Drink Categories
          </h1>
          <hr className="my-4" />
        </div>
      </div>
      <div className="row">{renderCategories()}</div>
    </div>
  );
}
export default CocktailCategory;
