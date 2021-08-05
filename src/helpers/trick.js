export default class Trick {
  constructor(scene) {

    // this.testFile = () => {
    //   console.log('trick.js')
    //   let test = scene.add.text(0, 0, ['HELLO WORLD']).setFontSize(50)
    //   return test
    // }

    this.renderTrick = (card) => {
      // console.log('renderTricck', card)
      //console.log('trickBox', scene.trickBox)
      // card.x = scene.trickBox.x
      // card.y = scene.trickBox.y

      scene.testGroup.add(card)
      scene.testGroup.setXY(scene.trickBox.x + 120, scene.trickBox.y + 170, 90);


    }
    // this.renderTrick = (x, y, combo) => {
    //   let card = scene.add.text(x, y, ['CARD']).setFontSize(18).setFontFamily('Trebuchet MS').setColor('#9457eb').setInteractive();

    // }
  }
}
