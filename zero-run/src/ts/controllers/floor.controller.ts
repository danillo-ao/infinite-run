import Game from "@controllers/game.controller";
import GameObject from "@global/game-object.class";

import * as floorAsset from "@values/floor.assets.json";
import {renderParallax} from "@utils/render.util";

class Floor extends GameObject {
  private x: number = 0;
  private speed: number = 4;

  public constructor() {
    super(floorAsset.path);
  };

  public render = () => {

    this.asset.crossOrigin = "*";
    this.ctx.fillStyle = this.ctx.createPattern(this.asset, "repeat-x");
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const imageURI = this.canvas.toDataURL("image/png");
    const floorImage = new Image();
    floorImage.src = imageURI;

    this.x = renderParallax(
      this.ctx,
      floorImage,
      this.speed,
      this.x,
      0,
      this.canvas.width,
      this.canvas.height,
    );
  };

}

export default Floor;
