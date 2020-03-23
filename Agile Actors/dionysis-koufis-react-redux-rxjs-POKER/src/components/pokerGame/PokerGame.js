import React from "react";
import Login from "../login";
import Results from "../results";
import Hand from "../hand";

import "./pokerGame.scss";

const PokerGame = ({
  name,
  homePage,
  playerHand,
  cpuHand,
  resultPlayer,
  resultCpu,
  winner,
  newRound,
  goToHome
}) => {
  if (homePage) {
    return <Login />;
  } else {
    return (
      <div className="pokerMain">
        <h1 className="pokerMain__tittle">Poker</h1>
        <p className="pokerMain__vs">{name} VS CPU</p>

        <div className="pokerMain__handsContainer">
          <Hand hand={playerHand} />
          <Hand hand={cpuHand} />

          <Results
            playerResult={resultPlayer}
            cpuResult={resultCpu}
            winner={winner}
          />

          <button className="pokerMain__reset" onClick={newRound}>
            Reset
          </button>

          <button className="pokerMain__toHome" onClick={goToHome}>
            Back To Home Screen
          </button>
        </div>
      </div>
    );
  }
};

export default PokerGame;
