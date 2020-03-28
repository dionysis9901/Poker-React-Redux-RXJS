export const settingGame = () => ({
  type: "SETTING_GAME"
});

export const deckServed = () => ({
  type: "DECK_SERVED"
});

export const getUserName = name => ({
  type: "GET_USER_NAME",
  payload: { name }
});

export const goToHome = () => ({
  type: "GO_TO_HOME"
});

export const newRound = () => ({
  type: "NEW_ROUND"
});

export const deckCreation = deck => ({
  type: "DECK_CREATION",
  payload: { deck }
});

export const giveCardsToPlayers = (playerHand, cpuHand) => ({
  type: "GIVE_CARDS_TO_PLAYERS",
  payload: {
    playerHand,
    cpuHand
  }
});

export const findWinner = (playerCombo, cpuCombo) => ({
  type: "FIND_WINNER",
  payload: {
    playerCombo,
    cpuCombo
  }
});

export const winnerFound = winner => ({
  type: "WINNER_FOUND",
  payload: {
    winner
  }
});

export const reset = () => ({
  type: "RESET"
});

export const cardSelected = (selected, id) => ({
  type: "CARD_SELECTED",
  payload: {
    selected,
    id
  }
});

export const addOrRemoveItem = (newCard, id) => ({
  type: "ADD_OR_REMOVE_ITEM",
  payload: { newCard, id }
});
