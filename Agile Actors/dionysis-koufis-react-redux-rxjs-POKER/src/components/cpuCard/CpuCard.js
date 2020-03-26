import React from "react";
import "../../styles/cards.css";
import "../../styles/cards.css.map";

const CpuCard = ({ rank, suit }) => (
  <div className={`card back href="#"`}>
    <span className="rank">{rank.toUpperCase()}</span>
    <span
      className="suit"
      dangerouslySetInnerHTML={{ __html: `&${suit};` }}
    ></span>
  </div>
);

export default CpuCard;
