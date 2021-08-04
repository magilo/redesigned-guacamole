export default class Deck {
  constructor(scene) {

    //property values are to form unicode combination
    const suits = {
      spades: 'A',
      hearts: 'B',
      diamonds: 'C',
      clubs: 'D'
    }

    const values = {
      A: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 'A',
      J: 'B',
      Q: 'D',
      K: 'E'
    }

    this.createDeck = () => {
      for (const s in suits) {
        for (const v in values) {
          const card = {
            value: v,
            suit: s,
            unicode: '0x1F0' + suits[s] + values[v]
          }
          scene.deck.push(card);
        }
      }
    }

    this.dealCards = (deck) => {
      //deck is an array
      let diamond3;
      let tempHands = [{}, {}, {}, {}];
      let handIdx = 0;
      for (let i = 0; i < deck.length; i++) {
        let card = deck[i];
        if (card.value === '3' && card.suit === 'diamonds') {
          diamond3 = handIdx;
          console.log("diamond3", diamond3)
        }
        tempHands[handIdx][card.unicode] = card;
        if (handIdx >= 3) {
          handIdx = 0;
        } else {
          handIdx++;
        }
      }
      console.log(tempHands)

      for (let player in scene.players) {
        // console.log(player)
        scene.players[player].setData('hand', tempHands[scene.players[player].state]);
      }
    }

  }
}
