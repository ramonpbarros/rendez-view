const express = require("express");
const db = require("../models");
const isAuthenticated = require("../config/isAuthenticated");

const router = express.Router();

// use isAuthenticated middleware to protect this route
router.get("/api/user/:id", isAuthenticated, (req, res) => {
  db.User.findById(req.params.id)
    .populate("plans")
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No user found" });
      }
    })
    .catch((err) => res.status(400).send(err));
});

router.post("/api/user/plans", isAuthenticated, (req, res) => {
  db.Plan.create(req.body).then((plan) => {
    return db.User.findByIdAndUpdate(req.user.id, {
      $push: { plans: plan },
    })
      .then(() => {
        res.json(plan);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  });
});

module.exports = router;
