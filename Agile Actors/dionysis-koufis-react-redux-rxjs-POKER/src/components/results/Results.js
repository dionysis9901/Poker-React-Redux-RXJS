import React from "react";
import "./results.scss";

const Results = ({ playerResult, cpuResult, winner }) => (
  <div className="stats">
    <div className="stats__player">Player: {playerResult}</div>
    <div className="stats__cpu">CPU: {cpuResult}</div>
    <div className="stats__winner">
      Winner:
      <span className="stats__winner__mod">{winner}</span>
    </div>
  </div>
);

export default Results;
