import React, { useState, useEffect } from "react";
import ChosenMeal from "../components/ChosenMeal";
import API from "../utils/API/Food";

import { useParams } from "react-router-dom";

function MealPage() {
  const { id } = useParams();
  console.log(id);
  const [state, setState] = useState([]);
  useEffect(() => {
    API.getMeal(id).then((res) => {
      console.log(res.data.meals);
      setState(
        res.data.meals.map((res) => ({
          m_id: res.idMeal,
          m_name: res.strMeal,
          m_image: res.strMealThumb,
          m_instruction: res.strInstructions,
          m_ingredient1: res.strIngredient1,
          m_ingredient2: res.strIngredient2,
          m_ingredient3: res.strIngredient3,
          m_ingredient4: res.strIngredient4,
          m_ingredient5: res.strIngredient5,
          m_ingredient6: res.strIngredient6,
          m_ingredient7: res.strIngredient7,
          m_ingredient8: res.strIngredient8,
          m_ingredient9: res.strIngredient9,
          m_ingredient10: res.strIngredient10,
          m_ingredient11: res.strIngredient11,
          m_ingredient12: res.strIngredient12,
          m_ingredient13: res.strIngredient13,
          m_ingredient14: res.strIngredient14,
          m_ingredient15: res.strIngredient15,
          m_ingredient16: res.strIngredient16,
          m_measure1: res.strMeasure1,
          m_measure2: res.strMeasure2,
          m_measure3: res.strMeasure3,
          m_measure4: res.strMeasure4,
          m_measure5: res.strMeasure5,
          m_measure6: res.strMeasure6,
          m_measure7: res.strMeasure7,
          m_measure8: res.strMeasure8,
          m_measure9: res.strMeasure9,
          m_measure10: res.strMeasure10,
          m_measure11: res.strMeasure11,
          m_measure12: res.strMeasure12,
          m_measure13: res.strMeasure13,
          m_measure14: res.strMeasure14,
          m_measure15: res.strMeasure15,
          m_measure16: res.strMeasure16,
        }))
      );
    });
  }, [id]);
  function renderCategories() {
    return state.map((item) => {
      return (
        <ChosenMeal
          key={item.m_id}
          name={item.m_name}
          image={item.m_image}
          instruction={item.m_instruction}
          ingredient1={item.m_ingredient1}
          ingredient2={item.m_ingredient2}
          ingredient3={item.m_ingredient3}
          ingredient4={item.m_ingredient4}
          ingredient5={item.m_ingredient5}
          ingredient6={item.m_ingredient6}
          ingredient7={item.m_ingredient7}
          ingredient8={item.m_ingredient8}
          ingredient9={item.m_ingredient9}
          ingredient10={item.m_ingredient10}
          ingredient11={item.m_ingredient11}
          ingredient12={item.m_ingredient12}
          ingredient13={item.m_ingredient13}
          ingredient14={item.m_ingredient14}
          ingredient15={item.m_ingredient15}
          ingredient16={item.m_ingredient16}
          measure1={item.m_measure1}
          measure2={item.m_measure2}
          measure3={item.m_measure3}
          measure4={item.m_measure4}
          measure5={item.m_measure5}
          measure6={item.m_measure6}
          measure7={item.m_measure7}
          measure8={item.m_measure8}
          measure9={item.m_measure9}
          measure10={item.m_measure10}
          measure11={item.m_measure11}
          measure12={item.m_measure12}
          measure13={item.m_measure13}
          measure14={item.m_measure14}
          measure15={item.m_measure15}
          measure16={item.m_measure16}
        />
      );
    });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4 ml-4"></div>
      </div>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">{renderCategories()}</div>

        <div className="col-sm-2"></div>
      </div>
      ;
    </div>
  );
}
export default MealPage;
