import React from "react";
import { useHistory } from "react-router";
import { IoArrowForward } from "react-icons/io5";
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
        <div className="input-container">
          <input
            type="text"
            onChange={inputHandler}
            placeholder="Your chess.com username"
            value={username}
          />
          <button className='submit-icon-container' type='submit'>
            <IoArrowForward />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
