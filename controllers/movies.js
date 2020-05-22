const express = require("express");
const axios = require("axios");
const router = express.Router();
router.get("/moviecategory", (req, res) => {
  axios
    .get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=97607772fc281d59cc4416a0db38656c&language=en-US"
    )
    .then((response) => {
      return res.json(response.data);
      // console.log(response.data);
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
