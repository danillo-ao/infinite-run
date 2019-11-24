import Game from "@controllers/game.controller";

class GameObject {

  public readonly asset: HTMLImageElement;
  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;

  constructor( AssetPath: string ){
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
    assetImage.src = AssetPath;

    this.canvas = canvas;
    this.ctx = ctx;
    this.asset = assetImage;
  };

}

export default GameObject;
