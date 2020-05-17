import React from "react";
import { Link } from "react-router-dom";

function Jumbotron(props) {
  return (
    <div
      className="jumbotron"
      style={{ backgroundColor: "white", paddingBottom: 32 }}
    >
      <h1
        className="display-4"
        style={{ color: "#f54c4c", fontWeight: "bold" }}
      >
        Hello, {props.username}!
      </h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container {props.email}.
      </p>
      <div className="col text-center mt-5">
        <div className="btn-group">
          <button
            className="btn btn-custom btn-lg dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            My Plans
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" type="button">
              Plan 1
            </button>
            <button className="dropdown-item" type="button">
              Plan 2
            </button>
            <button className="dropdown-item disabled" type="button">
              Top rated plans
            </button>
          </div>
        </div>
        <Link
          to="/randomplan"
          className="btn btn-custom zoom btn-lg m-4"
          href="#"
          role="button"
        >
          Random Plan
        </Link>
        <Link
          to="/"
          className="btn btn-custom zoom btn-lg"
          href="#"
          role="button"
        >
          Create New Plan
        </Link>
      </div>
    </div>
  );
}

export default Jumbotron;
