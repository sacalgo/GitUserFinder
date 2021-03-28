import React, { Component } from "react";

import "./App.css";
import Navbar from "./component/layout/navbar";
import Users from "./component/users/Users";
import axios from "axios";
import { Search } from "./component/users/Search";


class App extends Component {
  state = {
    users: [],
    loading: false,
  };
    
  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }

  //search Github users
  searchUsers = async (text) => {
    this.setState({loading:true});
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };
  //clear users from state
  clearUsers=()=>this.setState({users:[], loading:false});
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <div className="container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length>0?true:false}></Search>
          <Users loading={this.state.loading} users={this.state.users}></Users>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
