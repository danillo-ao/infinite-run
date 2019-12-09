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
  private jumpForce: number = 6;

  public constructor() {
    super(playerAssets.path);

    document.addEventListener("keydown", this.handleControlDown);
    document.addEventListener("keyup", this.handleControlUp);

    document.addEventListener("touchstart", this.jump);
    document.addEventListener("click", this.jump);
  } // constructor

  /**
   * Função utilizada controlar os movimentos do player
   * @param event
   */
  private handleControlDown = (event: KeyboardEvent): void => {
    if (event.keyCode === 38 || event.keyCode === 32) {
      this.jump();
    }

    if (event.keyCode === 40) {
      this.roll();
    }
  };  // handleJump

  /**
   * Função utilizada para controlar os movimentos do player quando Soltar uma tecla
   * @param event
   */
  private handleControlUp = (event: KeyboardEvent): void => {
    if (event.keyCode === 40 && this.state === CPlayerState.rolling) {
      this.state = CPlayerState.running;
    }
  };

  /**
   * Aplica o rolamento do personagem, caso ele esteja no chão, caso esteja com o estado "pulando"
   * reseta o peso da gravidade para que ele caia mais rapido
   */
  public roll = () => {
    if (this.state === CPlayerState.jumping) {
      // quando o player estiver pulando, reseta o peso da gravidade
      this.gravitySpeed = this.gravity;
    } else if (this.state === CPlayerState.running) {
      // aplica o rolamento
      this.state = CPlayerState.rolling;
    }
  };

  /**
   * Aplica o pulo
   */
  public jump = () => {
    if (this.state !== CPlayerState.jumping) {
      this.state = CPlayerState.jumping;
      this.gravitySpeed = ((this.gravity * this.jumpForce) * -1);
    }
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
      if (this.state === CPlayerState.jumping) {
        this.state = CPlayerState.running;
      }
    }

    this.y = newGravity;
    this.frame = ((this.frame + 1) >= assetState.frames) ? assetState.repeatFrom : (this.frame + 1);
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
