import { groupBy } from "lodash";
import _ from "lodash";

const maxInARow = weights =>
  _.chain(weights)
    .sortBy()
    .uniq()
    .map((num, i) => num - i)
    .groupBy()
    .orderBy("length")
    .last()
    .value().length;

class generateDeck {
  constructor() {
    this.deck = [];
    this.playerHand = [];
    this.cpuHand = [];
    this.ranks = [
      { rank: "2", weight: 1 },
      { rank: "3", weight: 2 },
      { rank: "4", weight: 3 },
      { rank: "5", weight: 4 },
      { rank: "6", weight: 5 },
      { rank: "7", weight: 6 },
      { rank: "8", weight: 7 },
      { rank: "9", weight: 8 },
      { rank: "10", weight: 9 },
      { rank: "j", weight: 10 },
      { rank: "q", weight: 11 },
      { rank: "k", weight: 12 },
      { rank: "a", weight: 13 }
    ];
    this.weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    this.suits = ["hearts", "clubs", "diams", "spades"];
    this.createDeck = this.createDeck.bind(this);
    this.shuffleDeck = this.shuffleDeck.bind(this);
    this.createNewDeck = this.createNewDeck.bind(this);
    this.getPlayerHand = this.getPlayerHand.bind(this);
    this.getCpuHand = this.getCpuHand.bind(this);
    this.createNewDeck();
  }

  createDeck() {
    for (var i = 0; i < this.suits.length; i++) {
      for (var x = 0; x < this.ranks.length; x++) {
        var card = {
          rank: this.ranks[x].rank,
          weight: this.ranks[x].weight,
          suit: this.suits[i],
          selected: false
        };
        this.deck.push(card);
      }
    }
    this.shuffleDeck();
  }

  shuffleDeck() {
    this.deck = this.deck.map((card, index) => {
      card.index = index;
      return card;
    });
    for (let i = this.deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }

  getPlayerHand() {
    this.playerHand = this.deck.slice(46, 51);
    return this.playerHand;
  }

  getCpuHand() {
    this.cpuHand = this.deck.slice(41, 46);
    return this.cpuHand;
  }

  createNewDeck() {
    this.deck = [];
    this.createDeck();
    return this.deck;
  }
}

class rateCards {
  constructor(hand) {
    this.ranks = groupBy(hand, "rank");
    this.suits = groupBy(hand, "suit");
    this.rankTimes = groupBy(this.ranks, "length");
    this.suitsTimes = groupBy(this.suits, "length");
    this.maxInARow = maxInARow(hand.map(({ weight }) => weight));
  }

  getOfSameRank(n) {
    return this.rankTimes[n] || [];
  }

  hasOfSameRank(n) {
    return this.getOfSameRank(n).length;
  }

  getOfSameSuit(n) {
    return this.suitsTimes[n] || [];
  }

  hasOfSameSuit(n) {
    return this.getOfSameSuit(n).length;
  }
  hasAce() {
    return !!this.ranks["A"];
  }

  hasInARow(n) {
    return this.maxInARow >= n;
  }
}

const PokerRatings = {
  RoyalFlush: hand =>
    hand.hasInARow(5) && hand.hasOfSameSuit(5) && hand.hasAce(),
  StraightFlush: hand => hand.hasInARow(5) && hand.hasOfSameSuit(5),
  FourOfAKind: hand => hand.hasOfSameRank(4),
  FullHouse: hand => hand.hasOfSameRank(3) && hand.hasOfSameRank(2),
  Flush: hand => hand.hasOfSameSuit(5),
  Straight: hand => hand.hasInARow(5),
  ThreeOfAKind: hand => hand.hasOfSameRank(3),
  TwoPair: hand => hand.hasOfSameRank(2) >= 2,
  OnePair: hand => hand.hasOfSameRank(2),
  HighCard: hand => hand.hasOfSameRank(1) >= 5
};

const PokerHandRate = cards =>
  Object.entries(PokerRatings).find(([, is]) => is(cards))[0];

const assignWinnerPoints = res => {
  switch (res) {
    case "RoyalFlush":
      return 10;
    case "StraightFlush":
      return 9;
    case "FourOfAKind":
      return 8;
    case "FullHouse":
      return 7;
    case "Flush":
      return 6;
    case "Straight":
      return 5;
    case "ThreeOfAKind":
      return 4;
    case "TwoPair":
      return 3;
    case "OnePair":
      return 2;
    case "HighCard":
      return 1;
    default:
      console.log("Error Occured");
  }
};

const winnerCalculate = (resPlayer, resCpu) => {
  let winner;
  let playerResult = assignWinnerPoints(resPlayer);
  let cpuResult = assignWinnerPoints(resCpu);

  if (playerResult > cpuResult) {
    winner = "Player";
  } else if (cpuResult > playerResult) {
    winner = "CPU";
  } else {
    winner = "Tie";
  }
  return winner;
};

const myDeck = new generateDeck();

//Exports

const { deck, getPlayerHand, getCpuHand, createNewDeck, shuffleDeck } = myDeck;
export {
  shuffleDeck,
  createNewDeck,
  deck,
  getPlayerHand,
  getCpuHand,
  PokerHandRate,
  rateCards,
  winnerCalculate
};
