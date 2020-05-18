const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cName: {
    type: String,
    required: true,
  },
  cImg: {
    type: String,
    require: true,
  },
  cIngredient: [
    {
      type: String,
      require: true,
    },
  ],
  cMeasure: [
    {
      type: String,
      require: true,
    },
  ],
  cInstruction: {
    type: String,
    require: true,
  },
  mName: {
    type: String,
    required: true,
  },
  mImg: {
    type: String,
    require: true,
  },
  mIngredient: [
    {
      type: String,
      require: true,
    },
  ],
  mMeasure: [
    {
      type: String,
      require: true,
    },
  ],
  mInstruction: {
    type: String,
    require: true,
  },
});

const Plan = mongoose.model("Cocktail", planSchema);

module.exports = Plan;
