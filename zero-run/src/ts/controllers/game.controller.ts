import Player from "@controllers/player.controller";
import Background from "@controllers/background.controller";
import Floor from "@controllers/floor.controller";

class Game {
  // public game values
  public width:number = 500;
  public height:number = 300;
  public speed:number = 70;

  // game objects
  public player: Player;
  public background: Background;
  public floor: Floor;

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

    setInterval(this.draw, this.speed);
  };

}

export default new Game();
