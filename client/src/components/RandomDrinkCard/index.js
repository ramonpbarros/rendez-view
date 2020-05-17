import React from "react";

function RandomDrinkCard(props) {
  return (
    <div className="col mb-4" key={props.key}>
      <div className="card h-100">
        <img src={props.image} className="card-img-top" alt="cocktailImg" />
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
          <hr />
          <p className="card-text">{props.instruction}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomDrinkCard;
