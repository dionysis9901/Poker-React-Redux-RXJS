import React from "react";
import PlayerCard from "../playerCard";

const PlayerHand = ({ hand }) => (
  <div>
    <div className="handRow">
      <div className="playingCards">
        <ul className="table">
          {hand.map(({ rank, suit, selected }, index) => (
            <li key={index}>
              <PlayerCard rank={rank} suit={suit} selected={selected} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default PlayerHand;
