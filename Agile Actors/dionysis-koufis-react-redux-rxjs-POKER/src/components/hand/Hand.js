import React from "react";
import { OpenCard, HiddenCard } from "../card";

const PlayerHand = ({ hand, result }) => (
  <div>
    <div className="handRow">
      <div className="playingCards">
        <ul className="table">
          {hand.map(({ rank, suit }, index) => (
            <li key={index}>
              <OpenCard rank={rank} suit={suit} />
            </li>
          ))}
        </ul>
      </div>
      <p>{result}</p>
    </div>
  </div>
);

const CpuHand = ({ hand, result }) => (
  <div>
    <div className="handRow">
      <div className="playingCards">
        <ul className="table">
          {hand.map(({ rank, suit }, index) => (
            <li key={index}>
              <HiddenCard rank={rank} suit={suit} />
            </li>
          ))}
        </ul>
      </div>
      <p>{result}</p>
    </div>
  </div>
);

export { PlayerHand, CpuHand };
