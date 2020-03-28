import React from "react";
import "../../styles/cards.css";
import "../../styles/cards.css.map";

const PlayerCard = ({ rank, suit, selected, cardSelected }) => (
  <label
    htmlFor={`c-${rank}${suit.slice(0, 1).toUpperCase()}`}
    className={`card rank-${rank} ${suit}`}
    onChange={cardSelected}
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
      selected={selected}
    />
  </label>
);
//tsekarei giati kathe karta
//den pernei to ID

export default PlayerCard;
