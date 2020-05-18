const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String, require: true },
  ingredient: [{ type: String, require: true }],
  measure: [{ type: String, require: true }],
  instruction: { type: String, require: true },
  category: { type: String, require: true },
});

const Cocktail = mongoose.model("Cocktail", mealSchema);

module.exports = Cocktail;
