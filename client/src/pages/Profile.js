import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Profile() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  }, [user]);

  return (
    <div className="jumbotron" style={{ backgroundColor: "snow" }}>
      <h1
        className="display-4"
        style={{ color: "#f54c4c", fontWeight: "bold" }}
      >
        Hello, {username}!
      </h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <div className="col text-center">
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
              Action
            </button>
            <button className="dropdown-item" type="button">
              Another action
            </button>
            <button className="dropdown-item disabled" type="button">
              Top rated plans
            </button>
          </div>
        </div>
        <Link
          to="/"
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
      <div className="container Profile">
        <h1>On the profile page!</h1>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <Link to="/">Go home</Link>
      </div>
    </div>
  );
}

export default Profile;
