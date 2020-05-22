import axios from "axios";
export default {
  getAllGenres: function () {
    return axios.get("api/moviecategory");
  },
};
