import { cardSelected } from "../actions";

const initialState = {
  name: null || "You",
  gameOn: false,
  homePage: true,
  deck: null,
  playerHand: null,
  cpuHand: null,
  resultPlayer: null,
  resultCpu: null,
  winner: null,
  cardSelected: []
};

const gameReducer = (state = initialState, { type, payload }) => {
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

    case "GIVE_CARDS_TO_PLAYERS":
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

    case "CARD_SELECTED":
      return {
        ...state
      };

    case "ADD_OR_REMOVE_ITEM":
      if (!payload.newCard[0].selected) {
        payload.newCard[0].selected = !payload.newCard[0].selected;
        payload.newCard[0].id = payload.id; 

        return {
          ...state,
          cardSelected: [...state.cardSelected, payload.newCard[0]]
        };
      } else if (payload.newCard[0].selected) {
        payload.newCard[0].selected = !payload.newCard[0].selected;
        return {
          ...state,
          cardSelected: state.cardSelected.filter(
            card => payload.newCard[0].id !== card.id
          )
        };
      }

    default:
      return initialState;
  }
};

export default gameReducer;
