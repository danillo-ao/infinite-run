import Game from "@controllers/game.controller";

import * as playerAssets from "@values/player.assets.json";

class Player {

  private readonly asset: HTMLImageElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private frame: number = 0;

  public constructor() {
    // create canvas and context
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    // define canvas sizes
    canvas.width = Game.width;
    canvas.height = Game.height;
    // append canvas to body
    document.getElementById("body-root").appendChild(canvas);

    // create a image player asset
    const assetImage = new Image();
    assetImage.src = playerAssets.path;

    this.canvas = canvas;
    this.ctx = ctx;
    this.asset = assetImage;
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
