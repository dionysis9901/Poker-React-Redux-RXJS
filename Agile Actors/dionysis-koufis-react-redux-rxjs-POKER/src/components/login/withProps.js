import React from "react";
import Login from "./Login";
import { gameStart, getUserName } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const withProps = Component => props => {
  const { name, gameOn } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <Login
      name={name}
      gameOn={gameOn}
      gameStart={() => dispatch(gameStart())}
      getUserName={name => dispatch(getUserName(name))}
    />
  );
};
export default withProps;
