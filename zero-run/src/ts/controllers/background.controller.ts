import Game from "@controllers/game.controller";
import * as backgroundAssets from "@values/background.assets.json";

class Background {

  private readonly asset: HTMLImageElement;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private x: number = 0;
  private repeat: number = 2;

  constructor() {
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
    assetImage.src = backgroundAssets.path;

    this.canvas = canvas;
    this.ctx = ctx;
    this.asset = assetImage;
  }

  public render = () => {
    this.ctx.clearRect(0, 0, Game.width, Game.height);

    this.ctx.drawImage(
      this.asset,
      0,
      0,
      this.asset.width,
      this.asset.height,
      this.x,
      0,
      Game.width,
      Game.height
    );


    this.x -= Game.speed;

  };

}

export default Background;
