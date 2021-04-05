/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/layout/navbar";
import User from "./component/users/User";
import Home from "./component/pages/Home";
import NotFound from "./component/pages/NotFound";
import Alert from "./component/layout/Alert";
import About from "./component/pages/About";
import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <React.Fragment>
            <Navbar></Navbar>
            <div className="container">
              <Alert></Alert>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound}/>
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
