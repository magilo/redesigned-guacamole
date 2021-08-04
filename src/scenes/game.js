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

    this.trickBox = this.add.graphics().lineStyle(4, 0xc9c0bb).strokeRect(worldWidth - 730, 30, 700, 500)

    this.dealText = this.add.text(75, 350, ['NEW GAME'], style).setInteractive();

    this.dealText.on('pointerdown', function () {

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
