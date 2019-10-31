import "../styles.scss";

// import of configs

// Require dependencies files
import GameController from "src/ts/controllers/game-controller";
import CanvasController from "@controllers/canvas-controller";
import PlayerController from "@controllers/player-controller";




// steps to initialize the game
GameController.setupGame();
CanvasController.init();

const Player = new PlayerController();
Player.init();


setInterval(CanvasController.draw, 60);
