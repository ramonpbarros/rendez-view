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
        <Link
          to="/userplans"
          className="btn btn-custom zoom btn-lg m-4"
          href="#"
          role="button"
        >
          My Plans
        </Link>
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
