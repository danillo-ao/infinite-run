import CanvasController from "@controllers/./canvas-controller";
import {TMoveState, TPlayerAssets} from "../types/player-types";
import {CMoveState} from "@values/player-values";

export default class PlayerController {

  private life: number = 1;
  private frameIndex: number = 0;
  private moveState: TMoveState;

  private playerAssets: TPlayerAssets = {
    running: {
      source: "./src/assets/player/player-running.png",
      frameW: 31,
      frameH: 37,
      frames: 4
    },
    dash: null,
    jumping: null,
  };

  public run = () => {
    this.moveState = CMoveState.RUNNING;
    const img = new Image();
    const moveState = this.playerAssets[this.moveState];

    const frameSX = (moveState.frameW * this.frameIndex);

    img.src = moveState.source;
    img.addEventListener('load', e => {

      const dyFrame = (CanvasController.canvas.height - 10 - moveState.frameH);

      CanvasController.context.clearRect(50, dyFrame, moveState.frameW, moveState.frameH);

      CanvasController.context.drawImage(
        img,
        frameSX,
        0,
        moveState.frameW + 0,
        moveState.frameH + 0,
        50,
        dyFrame + 0,
        moveState.frameW,
        moveState.frameH
      );
    });

    if ((this.frameIndex + 1) >= moveState.frames){
      this.frameIndex = 0;
    } else {
      this.frameIndex = this.frameIndex + 1;
    }

  };


  public init = () => {
    setInterval(this.run,70)
  };

}
