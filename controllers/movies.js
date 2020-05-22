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
router.get("/moviecategory/:id", (req, res) => {
  axios
    .get(
      "https://api.themoviedb.org/3/discover/movie?api_key=97607772fc281d59cc4416a0db38656c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",
      // eslint-disable-next-line camelcase
      { params: { with_genres: req.params.id } }
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