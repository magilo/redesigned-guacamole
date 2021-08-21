export default class Hand {
  constructor(scene) {

    this.renderCard = (x, y, currCard) => {

      let card = scene.add.text(x, y, [String.fromCodePoint(currCard.unicode)]).setFontSize(140).setFontFamily('Arial').setColor('#000000').setInteractive();
      card.name = currCard.unicode;
      card.setDataEnabled();
      card.setData(currCard.unicode, currCard);

      scene.input.setDraggable(card);

      scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;
      })

      card.on('pointerdown', function () {
        if (card.state !== 1) {
          card.setColor('#9457eb')
          card.state = 1
          scene.combo[card.name] = card;
        } else {
          card.setColor('#000000');
          card.state = 0;
          delete scene.combo[card.name];
        }
      })

      return card
    }

    this.renderHand = (hand) => {
      //hand is an {}
      let i = 0;
      for (let card in hand) {
        this.renderCard(50 + (i * 90), 425, hand[card]);
        i++;
      }
    }

  }
}


/*
example of hand {}
{
    "0x1F0A2": {
        "value": "2",
        "suit": "spades",
        "unicode": "0x1F0A2"
    },
    "0x1F0D8": {
        "value": "8",
        "suit": "clubs",
        "unicode": "0x1F0D8"
    },
    "0x1F0C3": {
        "value": "3",
        "suit": "diamonds",
        "unicode": "0x1F0C3"
    },
    "0x1F0DB": {
        "value": "J",
        "suit": "clubs",
        "unicode": "0x1F0DB"
    },
    "0x1F0D9": {
        "value": "9",
        "suit": "clubs",
        "unicode": "0x1F0D9"
    },
    "0x1F0DA": {
        "value": "10",
        "suit": "clubs",
        "unicode": "0x1F0DA"
    },
    "0x1F0A7": {
        "value": "7",
        "suit": "spades",
        "unicode": "0x1F0A7"
    },
    "0x1F0AB": {
        "value": "J",
        "suit": "spades",
        "unicode": "0x1F0AB"
    },
    "0x1F0D2": {
        "value": "2",
        "suit": "clubs",
        "unicode": "0x1F0D2"
    },
    "0x1F0BD": {
        "value": "Q",
        "suit": "hearts",
        "unicode": "0x1F0BD"
    },
    "0x1F0B5": {
        "value": "5",
        "suit": "hearts",
        "unicode": "0x1F0B5"
    },
    "0x1F0BE": {
        "value": "K",
        "suit": "hearts",
        "unicode": "0x1F0BE"
    },
    "0x1F0A8": {
        "value": "8",
        "suit": "spades",
        "unicode": "0x1F0A8"
    }
}
*/
