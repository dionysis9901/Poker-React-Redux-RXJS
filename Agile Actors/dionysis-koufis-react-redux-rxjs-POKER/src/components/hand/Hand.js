import React from "react";
import Card from "../card";

const Hand = ({ hand, result }) => (
  <div>
    <div className="handRow">
      <div className="playingCards">
        <ul className="table">
          {hand.map(({ rank, suit }, index) => (
            <li key={index}>
              <Card rank={rank} suit={suit} />
            </li>
          ))}
        </ul>
      </div>
      <p>{result}</p>
    </div>
  </div>
);

export default Hand;
