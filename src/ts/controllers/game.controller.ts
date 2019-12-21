import Player from "@controllers/player.controller";
import Background from "@controllers/background.controller";
import Floor from "@controllers/floor.controller";
import Hud from "@controllers/hud.controller";
import Enemy from "@controllers/enemy.controller";
import Coins from '@controllers/coins.controller';
import Sound from '@controllers/sound.controller';
import * as playerAssets from '@values/player.assets.json';

class Game {
  // dev triggers
  public showCollisors: boolean = false;
  // public html values
  public bodyId: string = "body-root";
  // public game values
  public width:number = window.innerWidth < 500 ? window.innerWidth : 500;
  public height:number = window.innerWidth < 300 ? window.innerWidth : 300;
  public fps:number = (1000 / 30); // <~ divisor is the fps
  // public values
  public score: number = 0;
  public coinsBalance: number = 0;
  // floor settings
  public floorPosition = (this.height - 32);
  public miscSpeed: number = 8;
  // game states
  private freeze: boolean = false;
  private canResetGame: boolean = false;
  private gameover: boolean = false;
  // game objects
  public player: Player;
  public background: Background;
  public floor: Floor;
  public enemies: Enemy;
  public hud: Hud;
  public sound: Sound;
  public coins: Coins;

  public constructor() {
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("touchstart", this.handleKeyPress);
    document.addEventListener("click", this.handleTouchClick);
  } // constructor

  /**
   * Function used to detect when user touch the screen or click in the page with mouse
   */
  public handleTouchClick = (): void => {
    if (this.gameover) {
      console.log("reset game");
      this.resetGame();
    }
  }; // handleTouchClick

  /**
   * Function to detect when user press any key
   * @param event
   */
  public handleKeyPress = (event): void => {
    const keycode = event.keyCode;
    if (this.gameover && (keycode === 38 || keycode === 40 || keycode === 32)) {
      this.resetGame();
    }
  }; // handleKeyPress


  /**
   * Incrementa a velocidade de movimento do chão e dos inimigos
   */
  public increaseSpeed = () => {
    const newSpeed = this.miscSpeed + 0.1;
    this.miscSpeed = newSpeed > 25 ? 25 : newSpeed;
  };

  /**
   * Add a coin to balance
   */
  public addCointBalance = (): void => {
    this.coinsBalance++;
  }; // addCointBalance

  /**
   * Set the gameover state for the game. End the game
   */
  public gameOver = () : void => {
    this.gameover = true;
    setTimeout(() => {
      this.canResetGame = true;
    }, 400);
  }; // freezeGame

  /**
   * Set the game as freezed
   */
  public freezeGame = () : void => {
    this.freeze = true;
  }; // freezeGame

  /**
   * When player is dead (Game Over) this function reset the game to play again
   */
  public resetGame = () : void => {
    if (this.gameover && this.canResetGame) {
      this.score = 0;
      this.coinsBalance = 0;
      this.enemies.enemies = [];
      this.coins.coins = [];
      this.miscSpeed = 8;

      this.hud.hideGameOver();
      this.gameover = false;
    }
  }; // resetGame

  /**
   * Unset the freeze state of the game
   */
  public unfreezeGame = (): void => {
    this.freeze = false;
  }; // unfreezeGame

  // orchestra the render of layers
  public draw = () => {
    // Verify if game isn't freezed
    if (!this.freeze && !this.gameover) {
      this.score += 0.4;
      // draw the game/
      this.background.render();
      this.player.render();
      this.floor.render();
      this.enemies.render();
      this.coins.render();

      this.hud.countScore();
    }
  };
  // setup the game and create a loop interval
  public setup = () => {
    // setup of controllers
    this.background = new Background();
    this.floor = new Floor();
    this.enemies = new Enemy();
    this.coins = new Coins();
    this.player = new Player();

    // setup of HUD
    this.hud = new Hud();
    this.sound = new Sound();

    setInterval(this.draw, this.fps);
    // setInterval(this.freezeGame, 3000);
    setInterval(this.increaseSpeed, 1000);
  };

}

export default new Game();
