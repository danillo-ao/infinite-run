import Player from "@controllers/player.controller";
import Background from "@controllers/background.controller";
import Floor from "@controllers/floor.controller";

class Game {
  // public game values
  public width:number = 500;
  public height:number = 300;

  public fps:number = (1000 / 30); // <~ divisor is the fps
  // floor settings
  public floorPosition = (this.height - 32);
  public miscSpeed: number = 8;
  // game objects
  public player: Player;
  public background: Background;
  public floor: Floor;

  /**
   * Incrementa a velocidade de movimento do chão e dos inimigos
   */
  public increaseSpeed = () => {
    const newSpeed = this.miscSpeed + 0.1;
    this.miscSpeed = newSpeed > 25 ? 25 : newSpeed;
  };

  // orchestra the render of layers
  public draw = () => {
    // draw the game
    this.background.render();
    this.player.render();
    this.floor.render();
  };
  // setup the game and create a loop interval
  public setup = () => {
    this.background = new Background();
    this.floor = new Floor();
    this.player = new Player();

    setInterval(this.draw, this.fps);
    setInterval(this.increaseSpeed, 1000);
  };

}

export default new Game();
