import React from "react";
function ChosenMovie(props) {
  return (
    <div className="container">
      <div className="col-sm-6">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="col-sm-6">
        <div className="row">
          <div className="col-sm-12">
            <h1>{props.title}</h1>
            <p>{props.plot}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChosenMovie;
