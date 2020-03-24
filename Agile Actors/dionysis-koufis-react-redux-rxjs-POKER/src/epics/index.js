import { mapTo, map } from "rxjs/operators";
import { ofType } from "redux-observable";

import {
  createNewDeck,
  getPlayerHand,
  getCpuHand,
  PokerHandRate,
  rateCards,
  winnerCalculate
} from "../utilities/poker/poker.js";

import {
  deckCreation,
  deckServed,
  evaluateNewHands,
  findWinner,
  winnerFound,
  settingGame
} from "../actions";

export const gamePreparationEpic = (action$, state$) =>
  action$.pipe(
    ofType("SETTING_GAME"),
    map(() => (state$.value.deck = createNewDeck())),
    mapTo(deckCreation())
  );

export const deckIsReadyEpic = action$ =>
  action$.pipe(ofType("DECK_CREATION"), mapTo(deckServed()));

export const serveHandsToPlayersEpic = (action$, state$) =>
  action$.pipe(
    ofType("DECK_SERVED"),
    map(() => {
      state$.value.playerHand = getPlayerHand();
      state$.value.cpuHand = getCpuHand();
      return state$.value.playerHand, state$.value.cpuHand;
    }),
    mapTo(evaluateNewHands())
  );

export const evaluateHandsEpic = (action$, state$) =>
  action$.pipe(
    ofType("EVALUATE_NEW_HANDS"),
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

export const resetGameEpic = action$ =>
  action$.pipe(ofType("RESET"), mapTo(settingGame()));
