import "../styles.scss";

// import of configs

// Require dependencies files
import GameController from "src/ts/controllers/game-controller";
import CanvasController from "@controllers/canvas-controller";

window.GameSettings = "Teste";

const Canvas = new CanvasController();
Canvas.init();
