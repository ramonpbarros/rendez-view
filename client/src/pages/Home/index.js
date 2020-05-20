import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API/Plan";
import "./home.css";

function Home() {
  const [buttonText, setButtonText] = useState("Save Plan");
  const [planForm, setPlan] = useState({
    name: "",
    meal: "",
    cocktail: ""
  });

  const changeText = (text) => {
    if (planForm.name === "" || planForm.meal === "" || planForm.cocktail === ""){
      alert("Please Fill All Required Field")
    } else {
      setButtonText(text)
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setPlan({ ...planForm, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.savePlan(planForm)
      .then((res) => {
        setPlan({
          name: "",
          meal: "",
          cocktail: ""
        });
      })
      .catch((err) => console.log(err));
  };

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
          <form onSubmit={handleFormSubmit} id="myForm">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                onChange={handleInputChange}
                value={planForm.name}
                id="inputPlanName"
                placeholder="Enter plan's name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                name="cocktail"
                onChange={handleInputChange}
                value={planForm.cocktail}
                id="inputDrink"
                placeholder="Enter drink"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                name="meal"
                onChange={handleInputChange}
                value={planForm.meal}
                id="inputMeal"
                placeholder="Enter meal"
              />
              <small id="emailHelp" className="form-text text-muted">
                Make sure you type existing meal and drink. If you not so sure
                click on the search buttons.
              </small>
            </div>
            <button
              type="submit"
              value="Submit"
              className="btn btn-custom zoom btn-lg m-4"
              onClick={() => changeText("Plan Saved!")}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
