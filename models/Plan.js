const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planSchema = new Schema({
  name: { type: String, required: true },
  meal: { type: String, required: true },
  cocktail: { type: String, required: true },
});

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
