import React, { useState, useEffect } from "react";
import GenreCard from "../components/GenreCard";
import API from "../utils/API/Movies";

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
          link={`/moviecategory/${id}/${item.name}`}
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
            marginBottom: 0
          }}
        >
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
      <div className="row">{renderCategories()}</div>;
    </div>
  );
}
export default OneMovieGenre;
