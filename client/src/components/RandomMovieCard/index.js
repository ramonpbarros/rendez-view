import React from "react";

function RandomMovieCard(props) {
  return (
    <div className="col mb-4 mt-5">
      <div className="card  border-dark">
        <img src="https://images.unsplash.com/photo-1485115905815-74a5c9fda2f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className="card-img-top" alt="mealImg" />
        <div className="card-body">
          <h5 className="card-title">
            <strong>Movies</strong>
          </h5>
          <hr />
          <p>
            <strong>Coming Soon!</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RandomMovieCard;
