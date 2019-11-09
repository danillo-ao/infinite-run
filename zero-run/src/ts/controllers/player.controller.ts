import Game from "@controllers/game.controller";
import GameObject from "@global/game-object.class";

import * as playerAssets from "@values/player.assets.json";

class Player extends GameObject{

  private frame: number = 0;

  public constructor() {
    super(playerAssets.path);
  } // constructor

  /**
   * Render the player running animation
   */
  private renderRun = () => {
    const { running } = playerAssets;
    const frameX = (this.frame * running.width);
    const frameY = running.offsetTop;

    this.ctx.clearRect(0, 0, Game.width, Game.height);
    this.ctx.drawImage(
      this.asset,
      frameX,
      frameY,
      running.width,
      running.height,
      30,
      (Game.height - running.height - 20),
      running.width,
      running.height
    );

    this.frame = ((this.frame + 1) >= running.frames) ? 0 : (this.frame + 1);
  }; // renderRun

  /**
   * Render the player on the canvas
   */
  public render = () => {
    // trigger activated when the image of player assets has loaded
    this.renderRun()
  }; // render

}

export default Player;
