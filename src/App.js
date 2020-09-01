import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/private" component={PrivateComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
