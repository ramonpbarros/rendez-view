import React, { useState, useEffect } from "react";
import ChosenMovie from "../components/ChosenMovie";
import API from "../utils/API/Movies";

import { useParams } from "react-router-dom";
function MoviePage() {
  const { id } = useParams();

  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [plot, setPlot] = useState();

  useEffect(() => {
    API.getOneMovie(id).then((res) => {
      setTitle(res.data.original_title);
      setImage(` http://image.tmdb.org/t/p/w185/${res.data.backdrop_path}`);
      setPlot(res.data.overview);
    });
  }, []);
  function renderMovie() {
    return <ChosenMovie title={title} plot={plot} image={image} />;
  }
  return <div>{renderMovie()}</div>;
}
export default MoviePage;
