/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from '../../context/alert/AlertContext';
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext=useContext(AlertContext);

  const [text, setText] = useState("");

  const onChanage = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Please Enter Something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="search Users..."
          value={text}
          onChange={onChanage}
        ></input>
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        ></input>
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};


export default Search;
