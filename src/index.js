import Phaser from "phaser";
import Game from "./scenes/game";

const config = {
    type: Phaser.AUTO,
    parent: "game-area",
    width: 1280,
    height: 591,
    backgroundColor: '#f5eee5',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        Game
    ]
};

const game = new Phaser.Game(config);


// 1280,
//     height: 780
