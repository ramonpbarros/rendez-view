import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    login(email, password)
      // navigate to the profile page
      .then(() => history.push("/profile"))
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div
      className="card col-sm-6 col-lg-5"
      style={{ height: 460, marginTop: "5em", paddingTop: "1em" }}
    >
      <div className=" card-body container">
        <h1
          style={{ textAlign: "center", color: "#f54c4c", fontWeight: "bold" }}
          className="mb-4 mt-4"
        >
          Welcome Back
        </h1>
        <p style={{ textAlign: "center", color: "gray" }} className="mb-4">
          In order to login, please fill out all the fields below.
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            {/* <label htmlFor="email">Email address:</label> */}
            <input
              className="form-control"
              placeholder="E-mail"
              name="email"
              type="email"
              id="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
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
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <div className="col text-center">
            <button type="submit" className="btn btn-custom zoom mb-3 mt-3">
              Login
            </button>
          </div>
        </form>
        <p style={{ textAlign: "center" }}>
          <span style={{ color: "gray" }}>Don't an account? </span>
          <Link to="/signup" style={{ color: "grey", fontWeight: "bold" }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
