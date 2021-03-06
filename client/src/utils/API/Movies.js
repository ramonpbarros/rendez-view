import axios from "axios";
export default {
  getAllGenres: function () {
    return axios.get("api/moviecategory");
  },
  getOneGenre: function (id) {
    return axios.get("/api/moviecategory/" + id);
  },
  getOneMovie: function (name) {
    return axios.get("/api/moviecategory/:id" + name);
  },
  getOneMovie: function (id) {
    return axios.get("/api/moviecategory/:id/" + id);
  },
  getPopularMovie: function () {
    return axios.get("api/popularmovie");
  },
  getMovieTrailer: function (id) {
    return axios.get("api/movietrailer/" + id);
  },
  getMovie: function(id) {
    return axios.get("api/movie/" + id);
  }
};
