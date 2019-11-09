import Player from "@controllers/player.controller";
import Background from "@controllers/background.controller";

class Game {
  // public game values
  public width:number = 500;
  public height:number = 300;
  public speed:number = 70;

  // game objects
  public player: Player;
  public background: Background;

  // orchestra the render of layers
  public draw = () => {
    // draw the game
    this.background.render();
    this.player.render();
  };

  // setup the game and create a loop interval
  public setup = () => {
    this.background = new Background();
    this.player = new Player();

    setInterval(this.draw, this.speed);
  };

}

export default new Game();
