import Player from "@controllers/player.controller";

class Game {
  public width:number = 500;
  public height:number = 300;
  public speed:number = 80;

  public player: Player;

  public draw = () => {
    // draw the game
    this.player.render();
  };

  public setup = () => {
    this.player = new Player();
    setInterval(this.draw, this.speed);
  };

}

export default new Game();
