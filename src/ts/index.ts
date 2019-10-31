import "../styles.scss";

// import of configs

// Require dependencies files
import GameController from "src/ts/controllers/game-controller";
import CanvasController from "@controllers/canvas-controller";




// steps to initialize the game
const Game = new GameController();
Game.setupGame();

const Canvas = new CanvasController();
Canvas.init();
