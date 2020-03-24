import React from "react";
import PokerGame from "./PokerGame";

import { useSelector, useDispatch } from "react-redux";

import { newRound, goToHome } from "../../actions";

const withProps = Component => props => {
  const {
    name,
    homePage,
    gameOn,
    playerHand,
    cpuHand,
    resultPlayer,
    resultCpu,
    winner
  } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <PokerGame
      name={name}
      gameOn={gameOn}
      homePage={homePage}
      playerHand={playerHand}
      cpuHand={cpuHand}
      resultPlayer={resultPlayer}
      resultCpu={resultCpu}
      winner={winner}
      newRound={() => dispatch(newRound())}
      goToHome={() => dispatch(goToHome())}
    />
  );
};

export default withProps;
