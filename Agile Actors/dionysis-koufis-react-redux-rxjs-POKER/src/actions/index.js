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

export const giveHands = (playerHand, cpuHand) => ({
  type: "GIVE_HANDS",
  payload: { playerHand, cpuHand }
});
