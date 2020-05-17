const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/randomcocktail", (req, res) => {
  axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then((response) => {
      return res.json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
