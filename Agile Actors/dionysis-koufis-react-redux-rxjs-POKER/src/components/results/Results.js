import React from "react";
import "./results.scss";
import player from "../player";

const Results = ({ playerResult, cpuResult, winner }) => {
  if (playerResult === null && cpuResult === null && winner === null) {
    return (
      <div className="stats">
        <p className="awaitingRound">Waiting Round to finish</p>
      </div>
    );
  } else {
    return (
      <div className="stats">
        <div className="stats__player">Player: {playerResult}</div>
        <div className="stats__cpu">CPU: {cpuResult}</div>
        <div className="stats__winner">
          Winner:
          <span className="stats__winner__mod">{winner}</span>
        </div>
      </div>
    );
  }
};

export default Results;
