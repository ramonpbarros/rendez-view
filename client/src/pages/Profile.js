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
    <React.Fragment>
      <div className="jumbotron" style={{ backgroundColor: "#fff6f5" }}>
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
          It uses utility classes for typography and spacing to space content
          out within the larger container {email}.
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
      </div>
      <div class="card-deck mt-5">
        <div className="card bg-dark text-white">
          <img
            src="https://images.unsplash.com/photo-1509669803555-fd5edd8d5a41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <h1
              className="card-title mt-5"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
              }}
            >
              Cocktails
            </h1>
          </div>
        </div>
        <div className="card bg-dark text-white">
          <img
            src="https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <h1
              className="card-title mt-5"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
              }}
            >
              Meals
            </h1>
          </div>
        </div>
        <div className="card bg-dark text-white">
          <img
            src="https://images.unsplash.com/photo-1572188863110-46d457c9234d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <h1
              className="card-title mt-5"
              style={{
                textAlign: "center",
                fontWeight: "bold",
                textShadow:
                  "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
              }}
            >
              Movies
            </h1>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;
