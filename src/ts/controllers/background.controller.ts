import Game from "@controllers/game.controller";
import GameObject from "@global/game-object.class";

import * as backgroundAssets from "@values/background.assets.json";
import {renderParallax} from "@utils/render.util";

class Background extends GameObject{
  private x: number = 0;
  private speed: number = 2;

  constructor() {
    super(backgroundAssets.path);
  }

  public render = () => {
    this.x = renderParallax(
      this.ctx,
      this.asset,
      this.speed,
      this.x,
      0,
      this.asset.width,
      this.canvas.height
    );
  };

}

export default Background;
