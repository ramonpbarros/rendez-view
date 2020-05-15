import axios from "axios";
const BASEURL = "https://www.themealdb.com/api/json/v1/1/";
export default {
  getFoodCategories: function () {
    return axios.get(BASEURL + "categories.php");
  },
  getFoodCategory: function (query) {
    return axios.get(BASEURL + "filter.php?c=" + query);
  },
  getMeal: function (id) {
    return axios.get(BASEURL + "lookup.php?i=" + id);
  },
};
