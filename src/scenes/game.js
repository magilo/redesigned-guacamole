import Players from '../helpers/players';
import Deck from '../helpers/deck';
import Hand from '../helpers/hand';

export default class Game extends Phaser.Scene {
  constructor() {
    super({
      key: 'Game'
    });
  }

  preload() {

  }

  create() {
    let self = this;
    const style = { font: "bold 32px Courier New", fill: "#000000" };
    const worldHeight = this.cameras.main.height;
    const worldWidth = this.cameras.main.width;

    this.deck = [];
    this.players = {};
    this.newPlayers = new Players(this);
    this.newDeck = new Deck(this);
    this.newHand = new Hand(this);
    this.combo = {};

    self.newPlayers.renderPlayers();

    this.trickBox = this.add.graphics().fillStyle(0xf5f5f5).fillRect(worldWidth - 730, 30, 700, 500)

    this.newGame = this.add.text(75, 350, ['NEW GAME'], style).setInteractive();

    // this.testHandRender = () => {
    //   let newHand = new Hand(this);
    //   let hand = self.players.You.getData('hand')
    //   console.log(hand)
    //   let i = 0;
    //   for (let card in hand) {
    //     // playerCard.testFile();
    //     let currCard = hand[card]
    //     newHand.renderCard(50 + (i * 90), 600, currCard);
    //     i++;
    //   }

    // }

    this.newGame.on('pointerdown', function () {

      self.newDeck.createDeck();
      Phaser.Utils.Array.Shuffle(self.deck);
      //console.log(self.deck)
      self.newDeck.dealCards(self.deck);
      //console.log(self.players)

      self.newHand.renderHand(self.players.You.getData('hand'));
    })

    this.newGame.on('pointerover', function () {
      self.newGame.setColor('#ff69b4');
    })

    this.newGame.on('pointerout', function () {
      self.newGame.setColor('#000000');
    })



    this.playText = this.add.text(75, 450, ['PLAY COMBO'], style).setInteractive();

    this.playText.on('pointerdown', function () {
      // console.log('self.combo', self.combo)
      for (let key in self.combo) {
        let curr = self.combo[key]
        //console.log('curr', curr)
        curr.destroy();
        let yourHand = self.players.You.getData('hand')
        delete yourHand[key]
        // console.log(self.players.You.getData('hand'))
        self.players.You.setData('hand', yourHand);
      }
      self.combo = {};
    })

    this.playText.on('pointerover', function () {
      self.playText.setColor('#00ffff');
    })

    this.playText.on('pointerout', function () {
      self.playText.setColor('#000000');
    })


  }

  update() {

  }
}
