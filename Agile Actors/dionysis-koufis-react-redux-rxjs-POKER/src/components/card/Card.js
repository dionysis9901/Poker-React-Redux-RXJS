import React from "react";
import "./styles/cards.css";
import "./styles/cards.css.map";

const OpenCard = ({ rank, suit }) => (
  <label
    for={`c-${rank}${suit.slice(0, 1).toUpperCase()}`}
    className={`card rank-${rank} ${suit}`}
  >
    <span className="rank">{rank.toUpperCase()}</span>
    <span
      className="suit"
      dangerouslySetInnerHTML={{ __html: `&${suit};` }}
    ></span>
    <input
      type="checkbox"
      name={`c-${rank}${suit.slice(0, 1).toUpperCase()}`}
      id={`c-${rank}${suit.slice(0, 1).toUpperCase()}`}
      value="select"
    />
  </label>
);

const HiddenCard = ({ rank, suit }) => (
  <div className={`card back href="#"`}>
    <span className="rank">{rank.toUpperCase()}</span>
    <span
      className="suit"
      dangerouslySetInnerHTML={{ __html: `&${suit};` }}
    ></span>
  </div>
);

export { OpenCard, HiddenCard };
