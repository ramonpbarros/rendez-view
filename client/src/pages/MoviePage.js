import React, { useState, useEffect } from "react";
import ChosenMovie from "../components/ChosenMovie";
import API from "../utils/API/Movies";
import { useParams } from "react-router-dom";

function MoviePage() {
  const { id } = useParams();

  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [plot, setPlot] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  const [link, setLink] = useState();

  useEffect(() => {
    API.getOneMovie(id).then((res) => {
      setTitle(res.data.original_title);
      setImage(`http://image.tmdb.org/t/p/w185/${res.data.poster_path}`);
      setPlot(res.data.overview);
      setTime(res.data.runtime);
      setDate(res.data.release_date);
      setLink(`https://www.imdb.com/title/${res.data.imdb_id}/`);
    });
  }, []);
  function renderMovie() {
    return (
      <ChosenMovie
        title={title}
        plot={plot}
        image={image}
        time={time}
        date={date}
        link={link}
      />
    );
  }
  return <div>{renderMovie()}</div>;
}
export default MoviePage;
