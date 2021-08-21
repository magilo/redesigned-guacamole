import Players from '../helpers/players';
import Deck from '../helpers/deck';
import Hand from '../helpers/hand';
import Trick from '../helpers/trick';

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
    this.trickArea = new Trick(this);
    this.combo = {};

    self.newPlayers.renderPlayers();

    this.trickBox = this.add.rectangle(worldWidth - 730, 30, 600, 400, 0xf5f5f5);

    this.trickBox.setOrigin(0, 0);

    this.newGame = this.add.text(75, 300, ['NEW GAME'], style).setInteractive();


    this.newGame.on('pointerdown', function () {
      self.newDeck.createDeck();
      Phaser.Utils.Array.Shuffle(self.deck);
      self.newDeck.dealCards(self.deck);
      self.newHand.renderHand(self.players.You.getData('hand'));
      self.newGame.disableInteractive().setVisible(false);
      //console.log(self)
    })

    this.newGame.on('pointerover', function () {
      self.newGame.setColor('#ff5ccd');
    })

    this.newGame.on('pointerout', function () {
      self.newGame.setColor('#000000');
    })

    //group to store played combo & display in trick area
    this.trickGroup = this.add.group();

    this.playText = this.add.text(75, 375, ['PLAY COMBO'], style).setInteractive();

    //move this codeblock later into another file
    this.playText.on('pointerdown', function () {
      self.trickArea.playCombo()
      self.newPlayers.turn();
      // self.trickGroup.clear(true, true);
      // for (let key in self.combo) {
      //   let curr = self.combo[key]
      //   self.trickArea.renderTrick(curr);
      //   curr.removeInteractive();
      //   let yourHand = self.players.You.getData('hand')
      //   delete yourHand[key]
      //   self.players.You.setData('hand', yourHand);

      // }
      // self.combo = {};
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
