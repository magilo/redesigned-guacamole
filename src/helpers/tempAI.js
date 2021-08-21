export default class TempAI {
  constructor(scene) {


    this.aiAction = () => {
      //console.log(scene.players)
      //console.log('playerMap', scene.data.values.playerMap)
      let player = scene.data.values.playerMap[scene.data.get('currPlayer')];
      console.log('playerturn', player)
      scene.players[player].setData('name', player + ' ' + 'pass!')
    }

  }
}
