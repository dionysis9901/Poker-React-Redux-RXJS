const initialState = {
  name: null || "You",
  gameOn: false,
  homePage: true,
  deck: null,
  playerHand: null,
  cpuHand: null,
  playerMoney: 200,
  cpuMoney: 200,
  activeBid: 0,
  resultPlayer: null,
  resultCpu: null,
  winner: null,
  cardsSelected: []
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
        gameOn: false,
        homePage: true,
        deck: null,
        playerHand: null,
        cpuHand: null,
        playerMoney: 200,
        cpuMoney: 200,
        activeBid: 0,
        resultPlayer: null,
        resultCpu: null,
        winner: null,
        cardsSelected: []
      };

    case "CARD_SELECTED":
      return {
        ...state
      };

    case "ADD_OR_REMOVE_CARD":
      if (!payload.newCard[0].selected) {
        payload.newCard[0].selected = !payload.newCard[0].selected;
        payload.newCard[0].id = payload.id;

        return {
          ...state,
          cardsSelected: [...state.cardsSelected, payload.newCard[0]]
        };
      } else if (payload.newCard[0].selected) {
        payload.newCard[0].selected = !payload.newCard[0].selected;
        return {
          ...state,
          cardsSelected: state.cardsSelected.filter(
            card => payload.newCard[0].id !== card.id
          )
        };
      }

    case "CHANGE_CARDS":
      return {
        ...state,
        playerHand: state.playerHand.filter(card => card.selected !== true),
        cardsSelected: []
      };

    case "FILL_PLAYER_HAND_WITH_CARDS": {
      return {
        ...state,
        playerHand: [...payload.replacedCards, ...state.playerHand]
      };
    }

    case "PLAYER_BID": {
      return {
        ...state,
        playerMoney: state.playerMoney - payload.money,
        activeBid: state.activeBid + payload.money
      };
    }

    case "CPU_BID": {
      return {
        ...state,
        cpuMoney: state.cpuMoney - payload.money,
        activeBid: state.activeBid + payload.money
      };
    }

    default:
      return initialState;
  }
};

export default gameReducer;
