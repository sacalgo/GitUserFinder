/* eslint-disable no-unused-vars */
import React, {useContext}  from "react";
import UserItem from "./UserItem";
import Spinner from '../layout/spinner';
import PropTypes from 'prop-types';

import GithubContext from '../../context/github/githubContext';
const Users = () => {
   
  const githubContext=useContext(GithubContext);

  const{loading, users}=githubContext;

  if(loading){
      return <Spinner></Spinner>
      
  }else{
      return (
        <div style={userStyle}>
          {users.map((user) => {
            return <UserItem key={user.id} user={user}></UserItem>;
          })}
        </div>
      );

  }

  
};


const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Users;
