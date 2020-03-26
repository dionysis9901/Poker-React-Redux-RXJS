import { mapTo, map } from "rxjs/operators";

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

export const gamePreparationEpic = action$ =>
  action$.ofType("SETTING_GAME").pipe(map(() => deckCreation(createNewDeck())));

export const deckIsReadyEpic = action$ =>
  action$.ofType("DECK_CREATION").pipe(map(() => deckServed()));

export const serveHandsToPlayersEpic = action$ =>
  action$
    .ofType("DECK_SERVED")
    .pipe(map(() => evaluateNewHands(getPlayerHand(), getCpuHand())));

export const evaluateHandsEpic = (action$, state$) =>
  action$.ofType("EVALUATE_NEW_HANDS").pipe(
    map(() => {
      const playerCombo = PokerHandRate(new rateCards(state$.value.playerHand));
      const cpuCombo = PokerHandRate(new rateCards(state$.value.cpuHand));
      return findWinner(playerCombo, cpuCombo);
    })
  );

export const findTheWinnerEpic = (action$, state$) =>
  action$.ofType("FIND_WINNER").pipe(
    map(() => {
      const winner = winnerCalculate(
        state$.value.resultPlayer,
        state$.value.resultCpu
      );
      return winnerFound(winner);
    })
  );

export const resetGameEpic = action$ =>
  action$.ofType("RESET").pipe(mapTo(settingGame()));

//component player,host
//player (properties name)
// liturgies:bid,cardsChange,winner
