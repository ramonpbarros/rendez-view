import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <React.Fragment>
      <div
        className="jumbotron container"
        style={{ backgroundColor: "white", paddingBottom: 32 }}
      >
        <h1
          className="display-4"
          style={{ color: "#f54c4c", fontWeight: "bold" }}
        >
          Create Your Plan!
        </h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <div className="col text-center mt-3">
          <Link
            to="/cocktailcategory"
            className="btn btn-custom zoom btn-lg m-4"
            href="#"
            role="button"
          >
            Search for Drinks
          </Link>
          <Link
            to="/foodcategory"
            className="btn btn-custom zoom btn-lg"
            href="#"
            role="button"
          >
            Search for Meals
          </Link>
        </div>
        <hr className="my-4" />
        <div className="col text-center mt-5">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                id="inputPlanName"
                placeholder="Enter plan's name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                id="input"
                placeholder="Enter drink"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter meal"
                id="exampleInputPassword1"
              />
              <small id="emailHelp" className="form-text text-muted">
                Make sure you type existing meal and drink. If you not so sure click on the search buttons.
              </small>
            </div>
            <button type="submit" className="btn btn-custom zoom btn-lg m-4">
              Save Plan
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
