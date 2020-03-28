import React from "react";
import Player from "./Player";
import { cardSelected } from "../../actions";

import { useSelector, useDispatch } from "react-redux";

const withProps = Component => props => {
  const { playerHand } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <Player
      hand={playerHand}
      cardSelected={event =>
        dispatch(cardSelected(event.target.selected, event.target.id))
      }
    />
  );
};

export default withProps;
