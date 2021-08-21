import TempAI from './tempAI';

export default class Players {
  constructor(scene) {

    this.renderPlayers = () => {
      const allPlayers = ["Jessie", "James", "Meowth", "You"]
      for (let i = 0; i < allPlayers.length; i++) {
        let playerName = allPlayers[i]
        let player = scene.add.text(90, 60 + (i * 60), '', { font: 'bold 20px Courier', fill: '#00ff00' });
        player.setDataEnabled();
        player.setData({ name: playerName, hand: {} });
        player.setText([
          player.data.get('name'),
          'Cards in hand: ' + Object.keys(player.data.get('hand')).length
        ]);
        player.state = i;

        player.on('changedata-hand', function () {
          player.setText([
            player.data.get('name'),
            'Cards in hand: ' + Object.keys(player.data.get('hand')).length
          ]);
        });

        player.on('changedata-name', function () {
          player.setText([
            player.data.get('name'),
            'Cards in hand: ' + Object.keys(player.data.get('hand')).length
          ]);
        });

        scene.players[player.data.get('name')] = player;
      }

      //hardcode player index to name...for now
      //to deal with turns & access player's hand
      const playerMap = {
        "0": "Jessie",
        "1": "James",
        "2": "Meowth",
        "3": "You"
      };
      scene.data.set('playerMap', playerMap);
    }

    // this.ai = new TempAI(this)
    // let self = this
    let ai = new TempAI(scene)

    this.turn = () => {
      console.log('curr', scene.data.get('currPlayer'))
      //let player = scene.data.get('currPlayer')

      //if it starts at 3, need to make the AI take their turns
      //until it loops back to the player
      if (scene.data.get('currPlayer') === 3) {
        //player can pass or submit combo
        console.log('players turn,', scene.data.values.currPlayer)
        scene.data.set('currPlayer', 0)
      }

      while (scene.data.get('currPlayer') < 3) {
        //do AI stuff
        ai.aiAction(scene.data.get('currPlayer'))
        scene.data.values.currPlayer += 1
        console.log('inside while', scene.data.values.currPlayer)
      }




      //unless three passed consecutively, then go back to that player hmmm
    }
  }
}
