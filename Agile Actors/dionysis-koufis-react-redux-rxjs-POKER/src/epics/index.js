import { mapTo, map, delay } from "rxjs/operators";

import {
  createNewDeck,
  getPlayerHand,
  getCpuHand,
  PokerHandRate,
  rateCards,
  winnerCalculate,
  getCardsByNumber
} from "../utilities/poker/poker.js";

import {
  deckCreation,
  deckServed,
  giveCardsToPlayers,
  findWinner,
  winnerFound,
  settingGame,
  addOrRemoveCard,
  fillPlayerHandWithCards,
  cpuBid
} from "../actions";

export const gamePreparationEpic = action$ =>
  action$.ofType("SETTING_GAME").pipe(map(() => deckCreation(createNewDeck())));

export const deckIsReadyEpic = action$ =>
  action$.ofType("DECK_CREATION").pipe(map(() => deckServed()));

export const serveHandsToPlayersEpic = action$ =>
  action$
    .ofType("DECK_SERVED")
    .pipe(map(() => giveCardsToPlayers(getPlayerHand(), getCpuHand())));

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

export const cardIsSelectedEpic = (action$, state$) =>
  action$.ofType("CARD_SELECTED").pipe(
    map(action => {
      const newCard = state$.value.playerHand.filter(card => {
        const id = `c-${card.rank}${card.suit.slice(0, 1).toUpperCase()}`;
        if (action.payload.id === id) {
          return card;
        }
      });

      return addOrRemoveCard(newCard, action.payload.id);
    })
  );

export const fillCardsEpic = (action$, state$) =>
  action$.ofType("CHANGE_CARDS").pipe(
    map(() => {
      const cardsMissing = 5 - state$.value.playerHand.length;
      return fillPlayerHandWithCards(getCardsByNumber(cardsMissing));
    })
  );

export const cpuBidEpic = (action$, state$) =>
  action$.ofType("PLAYER_BID").pipe(
    delay(1000),
    map(() => {
      const moneyToBid = state$.value.activeBid;
      return cpuBid(moneyToBid);
    })
  );

export const evaluateHandsEpic = (action$, state$) =>
  action$.ofType("CPU_BID").pipe(
    delay(600),
    map(() => {
      const playerCombo = PokerHandRate(new rateCards(state$.value.playerHand));
      const cpuCombo = PokerHandRate(new rateCards(state$.value.cpuHand));
      return findWinner(playerCombo, cpuCombo);
    })
  );
