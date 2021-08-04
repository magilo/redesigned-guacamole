export default class Players {
  constructor(scene) {

    this.renderPlayers = () => {
      const allPlayers = ["Jessie", "James", "Meowth", "You"]
      for (let i = 0; i < allPlayers.length; i++) {
        let playerName = allPlayers[i]
        let player = scene.add.text(90, 60 + (i * 60), '', { font: '20px Courier', fill: '#00ff00' });
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

        scene.players[player.data.get('name')] = player;
      }
    }
  }
}
