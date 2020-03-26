import React from "react";
import Login from "../login";
import Results from "../results";
import PlayerHand from "../playerHand";
import CpuHand from "../cpuHand";

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
        <div className="pokerMain__handsContainer">
          <div className="pokerMain__box">
            <p className="pokerMain__box__player">{name}</p>
          </div>

          <PlayerHand hand={playerHand} />

          <div className="pokerMain__box">
            <p className="pokerMain__box__host">Host</p>
          </div>

          <CpuHand hand={cpuHand} />

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
