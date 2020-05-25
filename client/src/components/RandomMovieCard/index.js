import React from "react";

function RandomMovieCard(props) {
  return (
    <div className="col mb-4 mt-5">
      <div className="card h-100 border-dark">
        <img
          src={props.poster}
          className="card-img-top"
          alt="mealImg"
          height="348"
        />
        <div className="card-body">
          <h5 className="card-title">
            <strong>{props.title}</strong>
          </h5>
          <hr />
          <p>
            <strong>{props.plot}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RandomMovieCard;
