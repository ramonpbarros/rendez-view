import axios from "axios";

export default {
  //search by name
  getOneMeal: function (name) {
    return axios.get("/api/meal/" + name);
  },

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
