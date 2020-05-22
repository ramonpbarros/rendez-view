import React, { useState, useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
import API from "../utils/API/Movies";
function MovieCategory() {
  const [state, setState] = useState([]);
  useEffect(() => {
    API.getAllGenres()
      .then((res) =>
        setState(
          res.data.genres.map((res) => ({
            id: res.id,
            name: res.name,
            image:
              "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg",
          }))
        )
      )
      .catch((err) => console.log(err));
  }, []);
  function renderCategories() {
    return state.map((item) => {
      return (
        <CategoryCard
          key={item.id}
          name={item.name}
          image={item.image}
          link={"/"}
        />
      );
    });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-6">
          <h1>Movie Categories</h1>
        </div>
      </div>
      <div className="col-sm-2"></div>
      <div className="row">{renderCategories()}</div>;
    </div>
  );
}
export default MovieCategory;
