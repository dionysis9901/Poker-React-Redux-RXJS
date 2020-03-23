const gameStart = () => ({
  type: "GAME_START"
});

const getUserName = name => ({
  type: "GET_USER_NAME",
  payload: {
    name
  }
});

const goToHome = () => ({
  type: "GO_TO_HOME"
});

const newRound = () => ({
  type: "NEW_ROUND"
});

export { gameStart, getUserName, goToHome, newRound };
