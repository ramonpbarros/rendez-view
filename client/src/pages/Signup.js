import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import API from "./../utils/API";
import { useAuth } from "../utils/auth";

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: ""
  });

  const { isLoggedIn } = useAuth();

  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.signUpUser(formState.username, formState.email, formState.password)
      .then((res) => {
        // once the user has signed up
        // send them to the login page
        history.replace("/login");
      })
      .catch((err) => alert(err));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <div className="card">
      <div className=" card-body container">
        <h1
          style={{ textAlign: "center", color: "#f54c4c", fontWeight: "bold" }}
          className="mb-4"
        >
          Welcome
        </h1>
        <p style={{ textAlign: "center", color: "gray" }} className="mb-4">
          In order to sign up, please fill out all the fields below.
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            {/* <label htmlFor="username">Username:</label> */}
            <input
              className="form-control"
              placeholder="Username"
              name="username"
              type="text"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="email">Email address:</label> */}
            <input
              className="form-control"
              placeholder="E-mail"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="pwd">Password:</label> */}
            <input
              className="form-control"
              placeholder="Password"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div class="col text-center">
            <button type="submit" className="btn btn-custom zoom mb-3 mt-3">
              Sing Up
            </button>
          </div>
        </form>
        <p style={{ textAlign: "center" }}>
          <span style={{ color: "gray" }}>Already have an account? </span>
          <Link to="/login" style={{ color: "grey", fontWeight: "bold" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
