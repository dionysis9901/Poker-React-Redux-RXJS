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
  giveCardsToPlayers,
  findWinner,
  winnerFound,
  settingGame,
  addOrRemoveItem
} from "../actions";
import { ActionsObservable } from "redux-observable";

export const gamePreparationEpic = action$ =>
  action$.ofType("SETTING_GAME").pipe(map(() => deckCreation(createNewDeck())));

export const deckIsReadyEpic = action$ =>
  action$.ofType("DECK_CREATION").pipe(map(() => deckServed()));

export const serveHandsToPlayersEpic = action$ =>
  action$
    .ofType("DECK_SERVED")
    .pipe(map(() => giveCardsToPlayers(getPlayerHand(), getCpuHand())));

export const evaluateHandsEpic = (action$, state$) =>
  action$.ofType("GIVE_CARDS_TO_PLAYERS").pipe(
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

export const itemIsSelected = (action$, state$) =>
  action$.ofType("CARD_SELECTED").pipe(
    map(action => {
      const newCard = state$.value.playerHand.filter(card => {
        const id = `c-${card.rank}${card.suit.slice(0, 1).toUpperCase()}`;
        if (action.payload.id === id) {
          return card;
        }
      });

      return addOrRemoveItem(newCard, action.payload.id);
    })
  );
//player (properties name)
// liturgies:bid,cardsChange,winner
