import React from "react";

function RandomMovieCard(props) {
  return (
    <div className="col mb-4 mt-5">
      <div className="card h-100 border-dark">
        <img src={props.image} className="card-img-top" alt="movieImg" height="348" />
        <div className="card-body">
          <h5 className="card-title">
          <strong>{props.title}</strong>
          </h5>
          <hr />
          <p className="card-text">
            {props.measure1} {props.plot}
          </p>
          <p className="card-text">
            {props.measure2} {props.time}
          </p>
          <p className="card-text">
            {props.measure3} {props.date}
          </p>
          <p className="card-text">
            {props.measure4} {props.link}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RandomMovieCard;
