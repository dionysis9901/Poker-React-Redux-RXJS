import React from "react";
import Login from "../login";
import Results from "../results";
import Player from "../player";
import Cpu from "../cpu";

import "./pokerGame.scss";

const PokerGame = ({
  name,
  homePage,
  resultPlayer,
  resultCpu,
  winner,
  newRound,
  goToHome,
  cardsSelected,
  changeCards
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
          {/* PLAYER */}
          <Player />
          <p>Cards That are Selected are {cardsSelected.length}</p>
          <button onClick={changeCards}>Change Cards</button>

          <div className="pokerMain__box">
            <p className="pokerMain__box__host">Host</p>
          </div>
          {/* CPU */}
          <Cpu />

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
