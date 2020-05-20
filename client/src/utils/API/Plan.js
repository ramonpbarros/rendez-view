import axios from "axios";

export default {
  getAllPlans: () => {
    return axios.get("/api/plans");
  },

  savePlan: (plan) => {
    return axios.post("/api/plans", plan);
  },

  deletePlan: (id) => {
    return axios.delete("/api/plans" + id);
  }
};
