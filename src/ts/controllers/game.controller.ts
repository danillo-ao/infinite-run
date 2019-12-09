import Player from "@controllers/player.controller";
import Background from "@controllers/background.controller";
import Floor from "@controllers/floor.controller";
import Hud from "@controllers/hud.controller";

class Game {
  // public html values
  public bodyId: string = "body-root";
  // public game values
  public width:number = window.innerWidth < 500 ? window.innerWidth : 500;
  public height:number = window.innerWidth < 300 ? window.innerWidth : 300;
  public fps:number = (1000 / 30); // <~ divisor is the fps
  // public values
  public score: number = 0;
  public coins: number = 0;
  // floor settings
  public floorPosition = (this.height - 32);
  public miscSpeed: number = 8;
  // game objects
  public player: Player;
  public background: Background;
  public floor: Floor;
  public hud: Hud;

  /**
   * Incrementa a velocidade de movimento do chão e dos inimigos
   */
  public increaseSpeed = () => {
    const newSpeed = this.miscSpeed + 0.1;
    this.miscSpeed = newSpeed > 25 ? 25 : newSpeed;
  };

  // orchestra the render of layers
  public draw = () => {
    this.score += 0.5;
    // draw the game/
    this.background.render();
    this.player.render();
    this.floor.render();

    this.hud.countScore();
  };
  // setup the game and create a loop interval
  public setup = () => {
    this.background = new Background();
    this.floor = new Floor();
    this.player = new Player();

    this.hud = new Hud();

    setInterval(this.draw, this.fps);
    setInterval(this.increaseSpeed, 1000);
  };

}

export default new Game();
