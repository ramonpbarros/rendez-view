import axios from "axios";
export default {
  getAllGenres: function () {
    return axios.get("api/moviecategory");
  },
  getOneGenre: function (id) {
    return axios.get("/api/moviecategory/" + id);
  },
};
