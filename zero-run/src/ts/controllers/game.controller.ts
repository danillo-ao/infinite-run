import Player from "@controllers/player.controller";
import Background from "@controllers/background.controller";

class Game {
  public width:number = 500;
  public height:number = 300;
  public speed:number = 70;

  public player: Player;
  public background: Background;


  public draw = () => {
    // draw the game
    this.background.render();
    this.player.render();
  };

  public setup = () => {
    this.background = new Background();
    this.player = new Player();

    setInterval(this.draw, this.speed);
  };

}

export default new Game();
