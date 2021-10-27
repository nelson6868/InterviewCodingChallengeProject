import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
