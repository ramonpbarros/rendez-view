const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  meal: {
    name: { type: String, required: true },
  },
  cocktail: {
    name: { type: String, required: true },
  },
});

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
