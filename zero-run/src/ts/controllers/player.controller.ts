import Game from "@controllers/game.controller";
import GameObject from "@global/game-object.class";
import {CPlayerState, TPlayerState} from "@constants/player.types";

import * as playerAssets from "@values/player.assets.json";

class Player extends GameObject{

  private frame: number = 0;
  private state: TPlayerState = CPlayerState.running;

  private y: number = (Game.floorPosition - playerAssets.running.height);
  private x: number = 30;

  private gravity: number = 6;
  private gravitySpeed: number = this.gravity;
  private jumpForce: number = 5.8;

  public constructor() {
    super(playerAssets.path);

    document.addEventListener("keydown", this.handleControl);
  } // constructor

  /**
   * Função utilizada controlar os movimentos do player
   * @param event
   */
  private handleControl = (event: KeyboardEvent): void => {
    if (event.keyCode === 38 && this.state !== CPlayerState.jumping) {
      this.jump();
    }


  };  // handleJump

  /**
   * Aplica o pulo
   */
  public jump = () => {
    this.state = CPlayerState.jumping;
    this.gravitySpeed = ((this.gravity * this.jumpForce) * -1);
    setTimeout(() => { this.gravitySpeed = this.gravity; }, 300);
  }; // jump

  /**
   * Render the player jumping animation
   */
  private renderPlayerAnimation = () => {
    const assetState = playerAssets[this.state];
    const frameX = (this.frame * assetState.width);
    const frameY = assetState.offsetTop;

    this.ctx.clearRect(0, 0, Game.width, Game.height);
    this.ctx.drawImage(
      this.asset,
      frameX,
      frameY,
      assetState.width,
      assetState.height,
      this.x,
      this.y,
      assetState.width,
      assetState.height
    );

    // define the floor coords
    const floor = (Game.floorPosition - assetState.height);
    // increment the gravity speed
    this.gravitySpeed += this.gravity;
    // Calculate the new gravity,
    let newGravity = (this.y + this.gravitySpeed);
    if (newGravity >= floor){
      newGravity = floor;
      this.state = CPlayerState.running;
    }

    this.y = newGravity;
    this.frame = ((this.frame + 1) >= assetState.frames) ? 0 : (this.frame + 1);
  }; // renderRun

  /**
   * Render the player on the canvas
   */
  public render = () => {
    // trigger activated when the image of player assets has loaded
    this.renderPlayerAnimation();
  }; // render

}

export default Player;
