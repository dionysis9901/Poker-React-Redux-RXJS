import React from "react";
import PlayerCard from "./PlayerCard";

const Player = ({ hand, cardSelected }) => (
  <div>
    <div className="handRow">
      <div className="playingCards">
        <ul className="table">
          {hand.map(({ rank, suit, selected, index }) => (
            <li key={index}>
              <PlayerCard
                hand={hand}
                rank={rank}
                suit={suit}
                cardSelected={cardSelected}
                selected={selected}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Player;
