import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";

// Our Components
import { AuthProvider, useAuth } from "./utils/auth";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import FoodCategory from "./pages/FoodCategory";
import CocktailCategory from "./pages/CocktailCategory";
import RandomPlan from "./pages/RandomPlan";
import UserPlans from "./pages/UserPlans";
import OneFoodCategory from "./pages/OneFoodCategory";
import OneCocktailCategory from "./pages/OneCocktailCategory";
import MealPage from "./pages/MealPage";
import CocktailPage from "./pages/CocktailPage";
import MovieCategory from "./pages/MovieCategory";
import OneMovieGenre from "./pages/OneMovieGenre";
import MoviePage from "./pages/MoviePage";
function ProtectedRoute({ children, ...rest }) {
  const { isLoggedIn } = useAuth();
  return (
    <Route {...rest}>
      {isLoggedIn ? children : <Redirect to="/homepage" />}
    </Route>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <ProtectedRoute exact path="/">
              <Navbar />
              <Homepage />
              <Footer />
            </ProtectedRoute>
            <Route exact path="/login">
              <Navbar />
              <Login />
            </Route>
            <Route exact path="/signup">
              <Navbar />
              <Signup />
            </Route>
            <Route exact path="/homepage">
              <Homepage />
            </Route>
            <ProtectedRoute exact path="/profile">
              <Navbar />
              <Profile />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute exact path="/createplan">
              <Navbar />
              <Home />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute exact path="/foodcategory">
              <Navbar />
              <FoodCategory />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute exact path="/cocktailcategory">
              <Navbar />
              <CocktailCategory />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute exact path="/moviecategory">
              <Navbar />
              <MovieCategory />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute exact path="/moviecategory/:id">
              <Navbar />
              <OneMovieGenre />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute exact path="/moviecategory/:id/:id">
              <Navbar />
              <MoviePage />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute exact path="/cocktailcategory/:name">
              <Navbar />
              <OneCocktailCategory />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute exact path="/cocktailcategory/:name/:id">
              <Navbar />
              <CocktailPage />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute exact path="/foodcategory/:name">
              <Navbar />
              <OneFoodCategory />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute exact path="/foodcategory/:name/:id">
              <Navbar />
              <MealPage />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute exact path="/randomplan">
              <Navbar />
              <RandomPlan />
              <Footer />
            </ProtectedRoute>
            <ProtectedRoute exact path="/userplans">
              <Navbar />
              <UserPlans />
            </ProtectedRoute>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
