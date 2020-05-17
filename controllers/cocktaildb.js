const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/randomcocktail", (req, res) => {
  axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => {
      return res.json(response.data);
    })
    .catch((error) => {
      if (error.response) {
        res.sendStatus(error.response.statusText);
      } else {
        res.sendStatus(500);
      }
    });
});

module.exports = router;
