const express = require("express");
const db = require("../models");

const router = express.Router();

// route to get all saved plans
router.get("/plans", (req, res) => {
  db.Plan.find()
    .then((plans) => res.json(plans))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

// route to save a plan
router.post("/plans", (req, res) => {
  const newPlan = req.body;
  db.Plan.create(newPlan)
    .then((plan) => res.json(plan))
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

// route to delete a plan
router.delete("/plans/:id", (req, res) => {
  const { id } = req.params;
  db.Plan.deleteOne({ _id: id })
    .then(() => {
      res.end();
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
