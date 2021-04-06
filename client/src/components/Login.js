import React from "react";
import { useHistory } from "react-router";
import "./Login.css";

function Login({ username, setUsername }) {
  let history = useHistory();

  const inputHandler = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/data");
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h1>Chess Data</h1>
        <input
          type="text"
          onChange={inputHandler}
          placeholder="Your username"
          value={username}
        ></input>
      </form>
    </div>
  );
}

export default Login;
