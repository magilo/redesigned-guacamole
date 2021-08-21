export default class Trick {
  constructor(scene) {

    //this adds the selected combo cards into trick display area
    this.renderTrick = (card) => {

      scene.trickGroup.add(card)
      scene.trickGroup.setXY(scene.trickBox.x + 120, scene.trickBox.y + 170, 90);

    }

    this.playCombo = () => {
      scene.trickGroup.clear(true, true);
      for (let key in scene.combo) {
        let curr = scene.combo[key]
        scene.trickArea.renderTrick(curr);
        curr.removeInteractive();
        let yourHand = scene.players.You.getData('hand')
        delete yourHand[key]
        scene.players.You.setData('hand', yourHand);

      }
      scene.combo = {};
    }

  }
}
