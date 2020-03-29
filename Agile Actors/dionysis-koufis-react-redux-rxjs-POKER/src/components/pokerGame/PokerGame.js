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
  changeCards,
  playerMoney,
  cpuMoney,
  bidMoney,
  activeBid
}) => {
  if (homePage) {
    return <Login />;
  } else {
    return (
      <div className="pokerMain">
        <div className="pokerMain__console">
          <h2 className="pokerMain__console__tittle">Poker Console</h2>
          <p className="pokerMain__console__cardsSelection">
            You have selected{" "}
            <span className="colored">{cardsSelected.length}</span>{" "}
            {cardsSelected.length <= 1 ? (
              <p className="cardText">card</p>
            ) : (
              <p className="cardText">cards</p>
            )}
          </p>
          <button
            className="pokerMain__console__btnChange"
            onClick={changeCards}
          >
            Change Cards
          </button>
          <p className="console__playerMoney">Your Money : {playerMoney}💲</p>
          <p className="console__cpuMoney">Host Money : {cpuMoney}💲</p>

          <div className="console__buttonsBid">
            <p className="console__bidText">Bid:</p>
            <button
              className="console__btnBid"
              disabled={playerMoney <= 100 ? true : false}
              onClick={() => bidMoney(100)}
            >
              100💲
            </button>
            <button
              className="console__btnBid"
              disabled={playerMoney >= 200 ? false : true}
              onClick={() => bidMoney(200)}
            >
              200💲
            </button>
          </div>
          <p>
            Active Bids: <span className="colored">{activeBid}💲</span>
          </p>

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

        <div className="pokerMain__handsContainer">
          <div className="pokerMain__box">
            <p className="pokerMain__box__player">{name}</p>
          </div>

          <Player />

          <div className="pokerMain__box">
            <p className="pokerMain__box__host">Host</p>
          </div>

          <Cpu />
        </div>
      </div>
    );
  }
};

export default PokerGame;
