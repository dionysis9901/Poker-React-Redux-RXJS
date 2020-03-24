import { deck, getPlayerHand, getCpuHand } from "../utilities/poker/poker.js";

import { mapTo, map } from "rxjs/operators";
import { ofType } from "redux-observable";
import { deckCreation, deckServed, giveHands } from "../actions";

export const gamePreparation = action$ =>
  action$.pipe(ofType("SETTING_GAME"), mapTo(deckCreation(deck)));

export const deckIsReady = action$ =>
  action$.pipe(ofType("DECK_CREATION"), mapTo(deckServed()));

export const serveHandsToPlayers = action$ =>
  action$.pipe(
    ofType("DECK_SERVED"),
    mapTo(giveHands(getPlayerHand(), getCpuHand()))
  );

// VALTA STO EPICS ARR OTAN GRAFEIS ENA EPIC
// PADA PREPEI TO ACTION NA GIRNAEI TO STATE
