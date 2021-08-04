import Players from '../helpers/players';

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

    this.players = {};
    this.newPlayers = new Players(this)
    // const allPlayers = ["Jessie", "James", "Meowth", "You"]

    // for (let i = 0; i < allPlayers.length; i++) {
    //   let playerName = allPlayers[i]
    //   let player = self.add.text(75, 20 + (i * 40), '', { font: '16px Courier', fill: '#00ff00' });
    //   player.setDataEnabled();
    //   player.setData({ name: playerName, hand: {} });
    //   player.setText([
    //     'Name: ' + player.data.get('name'),
    //     'Cards in hand: ' + Object.keys(player.data.get('hand')).length
    //   ]);
    //   console.log('player obj', player)
    // }

    this.trickBox = this.add.graphics().lineStyle(4, 0xc9c0bb).strokeRect(worldWidth - 730, 30, 700, 500)

    this.dealText = this.add.text(75, 350, ['NEW GAME'], style).setInteractive();

    this.dealText.on('pointerdown', function () {
      self.newPlayers.renderPlayers();
      console.log(self.players)
    })

    this.dealText.on('pointerover', function () {
      self.dealText.setColor('#ff69b4');
    })

    this.dealText.on('pointerout', function () {
      self.dealText.setColor('#000000');
    })



    this.playText = this.add.text(75, 450, ['PLAY COMBO'], style).setInteractive();

    this.playText.on('pointerdown', function () {
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
