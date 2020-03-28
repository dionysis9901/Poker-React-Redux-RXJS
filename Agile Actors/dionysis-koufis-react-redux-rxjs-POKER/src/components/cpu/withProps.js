import React from "react";
import Cpu from "./Cpu";

import { useSelector, useDispatch } from "react-redux";

const withProps = Component => props => {
  const { cpuHand } = useSelector(state => state);
  const dispatch = useDispatch();
  return <Cpu hand={cpuHand} />;
};

export default withProps;
