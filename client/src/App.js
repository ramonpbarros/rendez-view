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
import Homepage from "./pages/Homepage";
import FoodCategory from "./pages/FoodCategory";
import CocktailCategory from "./pages/CocktailCategory";
import RandomPlan from "./pages/RandomPlan";
import OneFoodCategory from "./pages/OneFoodCategory";
import OneCocktailCategory from "./pages/OneCocktailCategory";
import MealPage from "./pages/MealPage";
import CocktailPage from "./pages/CocktailPage";

function ProtectedRoute({ children, ...rest }) {
  const { isLoggedIn } = useAuth();
  return (
    <Route {...rest}>
      {isLoggedIn ? children : <Redirect to="/homepage" />}
    </Route>
  );
  /*
  <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  */
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <ProtectedRoute exact path="/">
              <Navbar />
              <Home />
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
            </ProtectedRoute>
            <ProtectedRoute exact path="/foodcategory">
              <Navbar />
              <FoodCategory />
            </ProtectedRoute>
            <ProtectedRoute exact path="/cocktailcategory">
              <Navbar />
              <CocktailCategory />
            </ProtectedRoute>
            <ProtectedRoute exact path="/cocktailcategory/:name">
              <Navbar />
              <OneCocktailCategory />
            </ProtectedRoute>
            <ProtectedRoute exact path="/cocktailcategory/:name/:id">
              <Navbar />
              <CocktailPage />
            </ProtectedRoute>
            <ProtectedRoute exact path="/foodcategory/:name">
              <Navbar />
              <OneFoodCategory />
            </ProtectedRoute>
            <ProtectedRoute exact path="/foodcategory/:name/:id">
              <Navbar />
              <MealPage />
            </ProtectedRoute>
            <ProtectedRoute exact path="/randomplan">
              <Navbar />
              <RandomPlan />
            </ProtectedRoute>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
