import React, { useState, useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
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
        <CategoryCard
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
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <h1>Our Recommendations</h1>
        </div>
        <div className="col-sm-3"></div>
      </div>
      <div className="row">{renderCategories()}</div>;
    </div>
  );
}
export default OneMovieGenre;
