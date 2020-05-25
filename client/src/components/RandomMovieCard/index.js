import React, { useState, useEffect } from "react";
import API from "../../utils/API/Movies";

function RandomMovieCard(props) {
  const [trailer, setTrailer] = useState();

  useEffect(() => {
    if (props.id !== undefined) {
      API.getMovieTrailer(props.id).then((res) => {
        setTrailer(
          `https://www.youtube.com/watch?v=${res.data.results[0].key}`
        );
      });
    }
  }, []);

  return (
    <div className="col mb-4 mt-5">
      <div className="card h-100 border-dark">
        <img src={props.poster} className="card-img-top" alt="mealImg" />
        <div className="card-body">
          <h5 className="card-title">
            <strong>{props.title}</strong>
          </h5>
          <hr />
          <p>
            <strong>Plot:</strong>
          </p>
          <p>{props.plot}</p>
          <a href={trailer} target="_blank">
            View trailer
          </a>
        </div>
      </div>
    </div>
  );
}

export default RandomMovieCard;
