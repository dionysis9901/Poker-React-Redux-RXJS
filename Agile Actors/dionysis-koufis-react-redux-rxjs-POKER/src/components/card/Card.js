import React from "react";
import "./styles/cards.css";
import "./styles/cards.css.map";

const Card = ({ rank, suit }) => (
  <div className={`card rank-${rank} ${suit} href="#"`}>
    <span className="rank">{rank.toUpperCase()}</span>
    <span
      className="suit"
      dangerouslySetInnerHTML={{ __html: `&${suit};` }}
    ></span>
  </div>
);

export default Card;
