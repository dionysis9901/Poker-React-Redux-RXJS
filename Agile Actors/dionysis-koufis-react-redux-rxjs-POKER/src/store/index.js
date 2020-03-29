import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import gameReducer from "../reducers";

import {
  gamePreparationEpic,
  deckIsReadyEpic,
  serveHandsToPlayersEpic,
  evaluateHandsEpic,
  findTheWinnerEpic,
  resetGameEpic,
  cardIsSelectedEpic,
  fillCardsEpic,
  cpuBidEpic
} from "../epics";

const configureStore = () => {
  const epicsArr = [
    gamePreparationEpic,
    deckIsReadyEpic,
    serveHandsToPlayersEpic,
    evaluateHandsEpic,
    findTheWinnerEpic,
    resetGameEpic,
    cardIsSelectedEpic,
    fillCardsEpic,
    cpuBidEpic
  ];
  const epics = combineEpics(...epicsArr);
  const epicMiddleware = createEpicMiddleware();
  const middleware = [epicMiddleware];
  // const rootReducer = combineReducers(null);
  const store = createStore(
    gameReducer,
    compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  epicMiddleware.run(epics);
  return store;
};

export { configureStore };
