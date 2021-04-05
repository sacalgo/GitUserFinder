/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/layout/navbar";
import Users from "./component/users/Users";
import User from "./component/users/User";
import Search from "./component/users/Search";
import Alert from "./component/layout/Alert";
import About from "./component/layout/About";
import GithubState from "./context/github/githubState";
import AlertState from './context/alert/AlertState';

const App = () => {
 
  return (
    <GithubState>
      <AlertState>
        <Router>
          <React.Fragment>
            <Navbar></Navbar>
            <div className="container">
              <Alert ></Alert>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Fragment>
                      <Search
                        
                      ></Search>
                      <Users></Users>
                    </Fragment>
                  )}
                ></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/user/:login" component={User}></Route>
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
