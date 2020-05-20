import axios from "axios";

export default {
  getAlcoholCategories: function () {
    return axios.get("/api/cocktailcategory");
  },

  getAlcohol: function (name) {
    return axios.get("/api/cocktailcategory/" + name);
  },

  getCocktail: function (id) {
    return axios.get("/api/cocktailcategory/:name/" + id);
  },

  getRandom: function () {
    return axios.get("/api/randomcocktail");
  },
};
