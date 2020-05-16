import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
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

function ProtectedRoute({ children, ...rest }) {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return children;
  }
  return <Redirect to="/homepage" />;
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
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
