import axios from "axios";

export default {
  getFoodCategories: function () {
    return axios.get("api/foodcategory");
  },

  getFoodCategory: function (name) {
    return axios.get("/api/foodcategory/" + name);
  },
  getMeal: function (id) {
    return axios.get("/api/foodcategory/:name/" + id);
  },

  getRandom: function () {
    return axios.get("/api/randommeal");
  },
};
