import React from "react";

function RandomMealCard(props) {
  return (
    <div className="col mb-4" key={props.key}>
      <div className="card  border-dark">
        <img src={props.image} className="card-img-top" alt="mealImg" />
        <div className="card-body">
          <h5 className="card-title">
            <strong>{props.name}</strong>
          </h5>
          <hr />
          <p>
            <strong>Ingredients:</strong>
          </p>
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
          <hr />
          <p>
            <strong>Instruction:</strong>
          </p>
          <p className="card-text">{props.instruction}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomMealCard;
