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
};
