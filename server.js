require("dotenv").config();
const axios = require("axios");
const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const initDb = require("./config/initDb");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const errorMiddleware = require("./routes/errorMiddleware");
const cocktailRouter = require("./controllers/cocktaildb");
// const mealRouter = require("./controllers/mealdb");

const PORT = process.env.PORT || 3001;

// log all requests to the console in development
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Setting up express to use json and set it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initDb();

// Serve up static assets in production (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.get("/randomcocktail", (req, res) => {
//   axios
//     .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
//     .then((response) => {
//       res.send(response.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.get("/randommeal", (req, res) => {
  axios
    .get("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/api", cocktailRouter);
// app.use("/api", mealRouter);
app.use(authRouter, usersRouter, errorMiddleware);

// Send all other requests to react app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
