import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";
import gameReducer from "../reducers";

// import {} from "../epics";   // E  P I C S   H E R E

const configureStore = () => {
  const epicsArr = [];
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
