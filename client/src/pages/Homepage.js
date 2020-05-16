import React from "react";
import { Link } from "react-router-dom";
import { FaCocktail, FaUtensils, FaFilm } from "react-icons/fa";

function Homepage() {
  return (
    <React.Fragment>
      <div
        className="jumbotron jumbotron-fluid"
        style={{ backgroundColor: "#f54c4c", color: "white", height: 600 }}
      >
        <div className="container">
          <img
            src="https://images.unsplash.com/photo-1488116593952-937c38246bbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="imgHome"
            className="mr-5"
            width="35%"
            style={{ float: "left", border: "solid black 1", borderRadius: 10 }}
          />
          <h1
            className="display-4 mb-5 text-center"
            style={{ fontWeight: "bold" }}
          >
            Rendez-view
          </h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4 mr-5" style={{ width: "55%" }} />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <div className="col text-center mt-5">
            <Link
              to="/signup"
              className="btn btn-custom-homepage zoom btn-lg"
              href="#"
              role="button"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col mb-4">
            <div className="card h-100">
              <div className="col text-center mt-2">
                <FaCocktail size={32} />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Cocktails</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card h-100">
              <div className="col text-center mt-2">
                <FaUtensils size={32} />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Meals</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card h-100">
              <div className="col text-center mt-2">
                <FaFilm size={32} />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Movies</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Homepage;
