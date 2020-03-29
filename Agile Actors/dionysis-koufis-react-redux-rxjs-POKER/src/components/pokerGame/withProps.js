import React from "react";
import PokerGame from "./PokerGame";

import { useSelector, useDispatch } from "react-redux";

import { reset, goToHome, changeCards, playerBid } from "../../actions";

const withProps = Component => props => {
  const {
    name,
    homePage,
    gameOn,
    resultPlayer,
    resultCpu,
    winner,
    cardsSelected,
    playerMoney,
    cpuMoney,
    activeBid
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
      playerMoney={playerMoney}
      cpuMoney={cpuMoney}
      changeCards={() => dispatch(changeCards())}
      newRound={() => dispatch(reset())}
      goToHome={() => dispatch(goToHome())}
      bidMoney={money => dispatch(playerBid(money))}
      activeBid={activeBid}
    />
  );
};

export default withProps;
