import React from "react";
import MediaQuery from "react-responsive";
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
          <MediaQuery minDeviceWidth={1224}>
          <img
            src="https://images.unsplash.com/photo-1488116593952-937c38246bbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="imgHome"
            className="mr-5"
            width="35%"
            style={{ float: "left", border: "solid black 1", borderRadius: 10 }}
          />
          </MediaQuery>
          <h1
            className="display-4 mb-5 text-center"
            style={{ fontWeight: "bold" }}
          >
            Rendez-view
          </h1>
          <p className="lead">
            Discover and save favorite meals, cocktails and movies for better dates and family activities.
          </p>
          <hr className="my-4 mr-5" style={{ width: "55%" }} />
          <p>
            log in to begin browsing our large selection.
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
                  Explore our wide selection of drinks to discover your new favorite or to find recipes for new drinks to try.
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
                  Sample any of our delicious meals or search for your favorite to lear how to make it yourself.
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
                  be transported to new and familiar worlds with our incredable movie section to help hide the perfect movie for a date or to entertain the kids.
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
