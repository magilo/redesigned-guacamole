export default class Trick {
  constructor(scene) {

    //this adds the selected combo cards into trick display area
    this.renderTrick = (card) => {

      scene.testGroup.add(card)
      scene.testGroup.setXY(scene.trickBox.x + 120, scene.trickBox.y + 170, 90);

    }
  }
}
