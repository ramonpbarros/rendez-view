import React, { useState, useEffect } from "react";
import API from "../utils/API";
import APIC from "../utils/API/Cocktail";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import Jumbotron from "../components/Jumbotron";

function Profile() {
  const [randomDrink, setRandomDrink] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    API.getUser(user.id).then((res) => {
      setUsername(res.data.username);
      setEmail(res.data.email);
    });
  }, [user]);

  useEffect(() => {
    APIC.getRandom().then((res) => {
      console.log(res.data.drinks);
      setRandomDrink(
        res.data.drinks.map((res) => ({
          id: res.idDrink,
          name: res.strDrink,
          image: res.strDrinkThumb,
          instruction: res.strInstructions
        }))
      );
    });  
  }, []);

  return (
    <React.Fragment>
      {randomDrink.map((item)=>{
        return <h1 key={item.id}>{item.name}</h1>
      })}
      <Jumbotron username={username} email={email} />
      <div className="container px-lg-5">
        <div className="row mx-lg-n5">
          <div className="col-md-4 mb-4">
            <div className="thumbnail transparent-bg">
              <a href="/w3images/lights.jpg">
                <img
                  src="https://images.unsplash.com/photo-1509669803555-fd5edd8d5a41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt="Lights"
                  style={{ width: "100%", height: 305 }}
                />
              </a>
            </div>
            <div className="card-img-overlay col text-center mt-5">
              <div className="zoom1">
                <Link
                  to="/cocktailcategory"
                  className="card-title"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 40,
                    zIndex: 2,
                    position: "relative",
                    textDecoration: "none"
                  }}
                >
                  Cocktails
                </Link>
              </div>
              <hr
                className="my-2"
                style={{
                  backgroundColor: "white",
                  zIndex: 2,
                  position: "relative",
                  width: "70%"
                }}
              />
              <div className="zoom1">
                <Link
                  to="/cocktailcategory"
                  className="card-title mt-3"
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 16,
                    zIndex: 2,
                    textDecoration: "none",
                    position: "relative"
                  }}
                >
                  Search for recipes
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 ">
            <div className="thumbnail transparent-bg">
              <a href="/w3images/nature.jpg">
                <img
                  src="https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt="Nature"
                  style={{ width: "100%", height: 305 }}
                />
              </a>
            </div>
            <div className="card-img-overlay col text-center mt-5">
              <div className="zoom1">
                <Link
                  to="/foodcategory"
                  className="card-title"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 40,
                    zIndex: 2,
                    textDecoration: "none",
                    position: "relative"
                  }}
                >
                  Meals
                </Link>
              </div>
              <hr
                className="my-2"
                style={{
                  backgroundColor: "white",
                  zIndex: 2,
                  position: "relative",
                  width: "70%"
                }}
              />
              <div className="zoom1">
                <Link
                  to="/foodcategory"
                  className="card-title mt-3"
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 16,
                    zIndex: 2,
                    textDecoration: "none",
                    position: "relative"
                  }}
                >
                  Search for recipes
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="thumbnail transparent-bg">
              <a href="/w3images/fjords.jpg">
                <img
                  src="https://images.unsplash.com/photo-1572188863110-46d457c9234d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  alt="Fjords"
                  style={{ width: "100%", height: 305 }}
                />
              </a>
            </div>
            <div className="card-img-overlay col text-center mt-5">
              <div className="zoom1">
                <Link
                  to="/"
                  className="card-title"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 40,
                    zIndex: 2,
                    textDecoration: "none",
                    position: "relative"
                  }}
                >
                  Movies
                </Link>
              </div>
              <hr
                className="my-2"
                style={{
                  backgroundColor: "white",
                  zIndex: 2,
                  position: "relative",
                  width: "70%"
                }}
              />
              <div className="zoom1">
                <Link
                  to="/"
                  className="card-title mt-3"
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 16,
                    zIndex: 2,
                    textDecoration: "none",
                    position: "relative"
                  }}
                >
                  Search for movies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;
