import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";

function ChosenMovie(props) {
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
          {props.title}
        </h1>
        <hr className="my-4" />
      </div>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-sm-4">
            <img
              src={props.image}
              alt="mealImg"
              style={{
                border: "solid 1",
                borderRadius: 5,
                maxHeight: "500px",
                maxWidth: "300px",
              }}
              width="100%"
            />
          </div>
          <div className="col-sm-4 text-center">
            <h5 className="card-title">
              <strong>Plot:</strong>
            </h5>
            <div className="col">
              <p>{props.plot}</p>
            </div>
          </div>
          <div className="row">
            <div className="card-body">
              <p className="card-text">
                <strong>Released: </strong> {props.date}
              </p>
              <p className="card-text">
                <strong>Runtime: </strong> {props.time} minutes
              </p>

              <a href={props.link} target="_blank">
                Go to IMDB page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChosenMovie;
