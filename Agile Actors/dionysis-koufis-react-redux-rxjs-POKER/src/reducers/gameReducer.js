import {
  deck,
  getPlayerHand,
  getCpuHand,
  PokerHandRate,
  rateCards,
  createNewDeck,
  findWinner
} from "../utilities/poker/poker.js";

const initialState = {
  name: null || "You",
  gameOn: false,
  homePage: true,
  deck: null,
  playerHand: null,
  cpuHand: null,
  resultPlayer: PokerHandRate(new rateCards(getPlayerHand())),
  resultCpu: PokerHandRate(new rateCards(getCpuHand())),
  winner: findWinner(
    PokerHandRate(new rateCards(getPlayerHand())),
    PokerHandRate(new rateCards(getCpuHand()))
  )
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

    case "GIVE_HANDS":
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
    // case "NEW_ROUND":
    //   return {
    //     ...state,
    //     deck: createNewDeck(),
    //     playerHand: getPlayerHand(),
    //     cpuHand: getCpuHand(),
    //     resultPlayer: PokerHandRate(new rateCards(getPlayerHand())),
    //     resultCpu: PokerHandRate(new rateCards(getCpuHand())),
    //     winner: findWinner(
    //       PokerHandRate(new rateCards(getPlayerHand())),
    //       PokerHandRate(new rateCards(getCpuHand()))
    //     )
    //   };
    default:
      return initialState;
  }
};

export default gameReducer;
