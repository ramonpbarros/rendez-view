import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import GenreCard from "../components/GenreCard";
import API from "../utils/API/Movies";
import { FaArrowCircleLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";

function OneMovieGenre() {
  const { id } = useParams();

  const [state, setState] = useState([]);
  useEffect(() => {
    API.getOneGenre(id)
      .then((res) =>
        setState(
          res.data.results.map((res) => ({
            id: res.id,
            name: res.original_title,
            image: ` http://image.tmdb.org/t/p/w185/${res.poster_path}`,
          }))
        )
      )
      .catch((err) => console.log(err));
  }, [id]);
  function renderCategories() {
    return state.map((item) => {
      return (
        <GenreCard
          key={item.id}
          name={item.name}
          image={item.image}
          link={`/moviecategory/${id}/${item.id}`}
        />
      );
    });
  }
  return (
    <div className="container">
      <div className="row">
        <div
          className="jumbotron container"
          style={{
            backgroundColor: "white",
            paddingBottom: 0,
            marginBottom: 0,
          }}
        >
          <div className="mr-3 zoom1 mt-3" style={{ float: "left" }}>
            <Link style={{ color: "#f54c4c" }} to="/moviecategory">
              <FaArrowCircleLeft size={40} />
            </Link>
          </div>
          <h1
            className="display-4"
            style={{ color: "#f54c4c", fontWeight: "bold" }}
          >
            Recommended
          </h1>
          <hr className="my-4" />
        </div>
        <div className="col-sm-3"></div>
      </div>
      <div className="row">{renderCategories()}</div>
    </div>
  );
}
export default OneMovieGenre;
