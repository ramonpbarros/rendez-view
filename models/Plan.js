const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  meal: {
    name: { type: String, required: true },
    img: { type: String, require: true },
    ingredient: [{ type: String, require: true }],
    measure: [{ type: String, require: true }],
    instruction: { type: String, require: true },
  },
  cocktail: {
    name: { type: String, required: true },
    img: { type: String, require: true },
    ingredient: [{ type: String, require: true }],
    measure: [{ type: String, require: true }],
    instruction: { type: String, require: true },
  },
});

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
