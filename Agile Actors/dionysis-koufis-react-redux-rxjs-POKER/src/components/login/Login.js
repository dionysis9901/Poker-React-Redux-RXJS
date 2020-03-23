import React from "react";
import PokerGame from "../pokerGame";

import logo from "./poker.png";
import "./login.scss";

const Login = ({ gameStart, gameOn, getUserName }) => {
  if (gameOn) {
    return <PokerGame />;
  } else {
    return (
      <div className="login">
        <h2 className="login__heading">Welcome To The Poker Game</h2>
        <img className="login__img" src={logo} alt="poker logo" />
        <p className="login__tutorial">
          Enter Your Name & Press button to Begin!
        </p>

        <form className="login__form">
          <input
            type="text"
            placeholder="Insert Your Name Here"
            className="login__input"
            onChange={event => getUserName(event.target.value)}
          ></input>
        </form>

        <button onClick={gameStart} className="login__btn">
          You Versus CPU
        </button>

        <p className="login__footer">
          Made by Dionysis Koufis Using
          <span role="img" aria-label="react">
            ⚛️
          </span>
        </p>
      </div>
    );
  }
};

export default Login;
