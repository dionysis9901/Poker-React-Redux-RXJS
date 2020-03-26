import React from "react";
import CpuCard from "../cpuCard";

const CpuHand = ({ hand }) => (
  <div>
    <div className="handRow">
      <div className="playingCards">
        <ul className="table">
          {hand.map(({ rank, suit }, index) => (
            <li key={index}>
              <CpuCard rank={rank} suit={suit} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default CpuHand;
