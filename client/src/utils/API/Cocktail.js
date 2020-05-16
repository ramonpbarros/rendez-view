import axios from "axios";
const BASEURL = "https://www.thecocktaildb.com/api/json/v1/1/";

export default {
  getAlcoholCategories: function () {
    return axios.get(BASEURL + "list.php?i=list");
  },

  getAlcohol: function (query) {
    return axios.get(BASEURL + "filter.php?i=" + query);
  },

  getCocktail: function (id) {
    return axios.get(BASEURL + "lookup.php?iid=" + id);
  },

  getRandom: function () {
    return axios.get("/randomcocktail");
  }
};