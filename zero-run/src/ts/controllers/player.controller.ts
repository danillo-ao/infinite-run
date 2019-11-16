import Game from "@controllers/game.controller";
import GameObject from "@global/game-object.class";

import * as playerAssets from "@values/player.assets.json";

class Player extends GameObject{

  private frame: number = 0;

  private y: number = (Game.floorPosition - playerAssets.running.height);
  private x: number = 30;

  private gravity: number = 6;
  private gravitySpeed: number = this.gravity;
  private jumpForce: number = 5.8;

  public constructor() {
    super(playerAssets.path);

    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 38) {

        this.gravitySpeed = ((this.gravity * this.jumpForce) * -1);
        setTimeout(() => { this.gravitySpeed = this.gravity; }, 300);

      }
    });

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
      this.x,
      this.y,
      running.width,
      running.height
    );

    // define the floor coords
    const floor = (Game.floorPosition - running.height);
    // increment the gravity speed
    this.gravitySpeed += this.gravity;
    // Calculate the new gravity,
    let newGravity = (this.y + this.gravitySpeed);
    if (newGravity >= floor){ newGravity = floor; }

    this.y = newGravity;
    this.frame = ((this.frame + 1) >= running.frames) ? 0 : (this.frame + 1);
  }; // renderRun

  /**
   * Render the player on the canvas
   */
  public render = () => {
    // trigger activated when the image of player assets has loaded
    this.renderRun();
  }; // render

}

export default Player;
