import { mapTo, map } from "rxjs/operators";
import { ofType } from "redux-observable";

import {
  deck,
  getPlayerHand,
  getCpuHand,
  PokerHandRate,
  rateCards,
  winnerCalculate
} from "../utilities/poker/poker.js";

import {
  deckCreation,
  deckServed,
  getHands,
  findWinner,
  winnerFound
} from "../actions";

export const gamePreparationEpic = action$ =>
  action$.pipe(ofType("SETTING_GAME"), mapTo(deckCreation(deck)));

export const deckIsReadyEpic = action$ =>
  action$.pipe(ofType("DECK_CREATION"), mapTo(deckServed()));

export const serveHandsToPlayersEpic = action$ =>
  action$.pipe(
    ofType("DECK_SERVED"),
    mapTo(getHands(getPlayerHand(), getCpuHand()))
  );

export const evaluateHandsEpic = (action$, state$) =>
  action$.pipe(
    ofType("GET_HANDS"),
    map(() => {
      state$.value.resultPlayer = PokerHandRate(
        new rateCards(state$.value.playerHand)
      );
      state$.value.resultCpu = PokerHandRate(
        new rateCards(state$.value.cpuHand)
      );
      return state$.value.resultPlayer, state$.value.resultCpu;
    }),
    mapTo(findWinner())
  );

export const findTheWinnerEpic = (action$, state$) =>
  action$.pipe(
    ofType("FIND_WINNER"),
    map(() => {
      state$.value.winner = winnerCalculate(
        state$.value.resultPlayer,
        state$.value.resultCpu
      );
      return state$.value.winner;
    }),
    mapTo(winnerFound())
  );
