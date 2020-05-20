const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/cocktailcategory", (req, res) => {
  axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
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
router.get("/cocktailcategory/:name", (req, res) => {
  axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/filter.php", {
      params: { c: req.params.name },
    })
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
router.get("/cocktailcategory/:name/:id", (req, res) => {
  axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php", {
      params: { i: req.params.id },
    })
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
