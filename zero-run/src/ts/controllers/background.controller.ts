import Game from "@controllers/game.controller";
import GameObject from "@global/game-object.class";

import * as backgroundAssets from "@values/background.assets.json";

class Background extends GameObject{
  private x: number = 0;
  private speed: number = 4;

  constructor() {
    super(backgroundAssets.path);
  }

  public render = () => {
    this.ctx.clearRect(0, 0, Game.width, Game.height);

    for(let i = 0; i < 2; i++){
      this.ctx.drawImage(
        this.asset,
        0,
        0,
        this.asset.width,
        this.asset.height,
        (this.x + (i * this.asset.width)),
        0,
        Game.width,
        Game.height
      );
    }

    if ((this.x * -1) >= Game.width) {
      this.x = (this.speed * -1);
    } else {
      this.x -= this.speed;
    }
  };

}

export default Background;
