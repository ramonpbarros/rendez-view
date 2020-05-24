import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
function ChosenMeal(props) {
  function goBack() {
    window.history.back();
  }

  return (
    <div className="container">
      <div
        className="jumbotron container"
        style={{
          backgroundColor: "white",
          paddingBottom: 0,
          marginBottom: 0,
        }}
      >
        <div className="mr-1 zoom1 mt-2" style={{ float: "left" }}>
          <button style={{ color: "#f54c4c" }} onClick={goBack} className="btn">
            <FaArrowCircleLeft size={40} />
          </button>
        </div>
        <h1
          className="display-4"
          style={{ color: "#f54c4c", fontWeight: "bold" }}
        >
          {props.name}
        </h1>
        <hr className="my-4" />
      </div>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md">
            <img
              src={props.image}
              alt="mealImg"
              style={{ border: "solid 1", borderRadius: 5 }}
              width="100%"
            />
          </div>
          <div className="col-sm-4 text-center mt-3">
            <h5 className="card-title">
              <strong>Ingredients:</strong>
            </h5>
            <div className="col">
              <p className="card-text">
                {props.measure1} {props.ingredient1}
              </p>
              <p className="card-text">
                {props.measure2} {props.ingredient2}
              </p>
              <p className="card-text">
                {props.measure3} {props.ingredient3}
              </p>
              <p className="card-text">
                {props.measure4} {props.ingredient4}
              </p>
              <p className="card-text">
                {props.measure5} {props.ingredient5}
              </p>
              <p className="card-text">
                {props.measure6} {props.ingredient6}
              </p>
              <p className="card-text">
                {props.measure7} {props.ingredient7}
              </p>
              <p className="card-text">
                {props.measure8} {props.ingredient8}
              </p>
              <p className="card-text">
                {props.measure9} {props.ingredient9}
              </p>
              <p className="card-text">
                {props.measure10} {props.ingredient10}
              </p>
              <p className="card-text">
                {props.measure11} {props.ingredient11}
              </p>
              <p className="card-text">
                {props.measure12} {props.ingredient12}
              </p>
              <p className="card-text">
                {props.measure13} {props.ingredient13}
              </p>
              <p className="card-text">
                {props.measure14} {props.ingredient14}
              </p>
              <p className="card-text">
                {props.measure15} {props.ingredient15}
              </p>
              <p className="card-text">
                {props.measure16} {props.ingredient16}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="card-body">
              <h5 className="card-title">
                <strong>Instruction:</strong>
              </h5>
              <p className="card-text">{props.instruction}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChosenMeal;
