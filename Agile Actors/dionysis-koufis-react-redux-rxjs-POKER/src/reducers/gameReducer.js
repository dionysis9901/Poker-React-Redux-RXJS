const initialState = {
  name: null || "You",
  gameOn: false,
  homePage: true,
  deck: null,
  playerHand: null,
  cpuHand: null,
  resultPlayer: null,
  resultCpu: null,
  winner: null
};

const gameReducer = (state, { type, payload }) => {
  if (typeof state === "undefined") {
    return initialState;
  }
  switch (type) {
    case "GET_USER_NAME":
      return {
        ...state,
        name: payload.name
      };

    case "SETTING_GAME":
      return {
        ...state,
        gameOn: true,
        homePage: false
      };

    case "DECK_CREATION":
      return {
        ...state,
        deck: payload.deck
      };

    case "DECK_SERVED":
      return { ...state };

    case "EVALUATE_NEW_HANDS":
      console.log(payload);
      return {
        ...state,
        playerHand: payload.playerHand,
        cpuHand: payload.cpuHand
      };

    case "GO_TO_HOME":
      return {
        ...state,
        homePage: true,
        gameOn: false,
        name: null || "You"
      };

    case "FIND_WINNER":
      return {
        ...state,
        resultPlayer: payload.playerCombo,
        resultCpu: payload.cpuCombo
      };

    case "WINNER_FOUND":
      return { ...state, winner: payload.winner };

    case "RESET":
      return {
        ...state,
        deck: null,
        playerHand: null,
        cpuHand: null,
        resultPlayer: null,
        resultCpu: null,
        winner: null
      };

    default:
      return initialState;
  }
};

export default gameReducer;
