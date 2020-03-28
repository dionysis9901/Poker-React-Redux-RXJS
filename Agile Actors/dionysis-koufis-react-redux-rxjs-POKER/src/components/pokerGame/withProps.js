import React from "react";
import PokerGame from "./PokerGame";

import { useSelector, useDispatch } from "react-redux";

import { reset, goToHome, changeCards } from "../../actions";

const withProps = Component => props => {
  const {
    name,
    homePage,
    gameOn,
    resultPlayer,
    resultCpu,
    winner,
    cardsSelected
  } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <PokerGame
      name={name}
      gameOn={gameOn}
      homePage={homePage}
      resultPlayer={resultPlayer}
      resultCpu={resultCpu}
      winner={winner}
      cardsSelected={cardsSelected}
      changeCards={() => dispatch(changeCards())}
      newRound={() => dispatch(reset())}
      goToHome={() => dispatch(goToHome())}
    />
  );
};

export default withProps;
