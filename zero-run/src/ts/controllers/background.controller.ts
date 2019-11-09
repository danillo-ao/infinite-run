import Game from "@controllers/game.controller";
import GameObject from "@global/game-object.class";

import * as backgroundAssets from "@values/background.assets.json";
import {renderParallax} from "@utils/render.util";

class Background extends GameObject{
  private x: number = 0;
  private speed: number = 4;

  constructor() {
    super(backgroundAssets.path);
  }

  public render = () => {
    this.ctx.clearRect(0, 0, Game.width, Game.height);
    this.x = renderParallax(this.ctx, this.asset, this.speed, this.x);
  };

}

export default Background;
