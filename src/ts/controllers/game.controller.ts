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
  public loaderId: string = "loader-root";
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

  public resetGameTime: number = 1500;
  public gameStarted: boolean = false;
  public enableEnemies: boolean = false;
  public enableCoins: boolean = false;
  public gameover: boolean = false;
  // game states
  private freeze: boolean = false;
  private canResetGame: boolean = false;

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
    document.addEventListener("touchstart", this.handleTouchClick);
    document.addEventListener("click", this.handleTouchClick);
  } // constructor

  public hideLoader = (): void => {
    setTimeout(() => {
      const element: HTMLElement = document.getElementById(this.loaderId);
      if (!!element) {
        element.classList.add("fadeout");
        setTimeout(() => {
          element.style.display = "none";
        }, 1000);
      }
    }, 2500);
  };

  /**
   * Function used to detect when user touch the screen or click in the page with mouse
   */
  public handleTouchClick = (): void => {
    if (this.gameover) {
      this.resetGame();
    }

    if (!this.gameStarted) {
      this.gameStart();
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

    // if game isn't started, start the game
    if (!this.gameStarted && (keycode === 38 || keycode === 40 || keycode === 32)) {
      this.gameStart();
    }
  }; // handleKeyPress

  /**
   * Incrementa a velocidade de movimento do chão e dos inimigos
   */
  public increaseSpeed = () => {
    if (this.gameStarted) {
      const newSpeed = this.miscSpeed + 0.1;
      this.miscSpeed = newSpeed > 25 ? 25 : newSpeed;
    }
  }; // increaseSpeed

  /**
   * Add a coin to balance
   */
  public addCoinsBalance = (): void => {
    this.coinsBalance++;
  }; // addCoinsaddBalance

  /**
   * Set the gameover state for the game. End the game
   */
  public gameOver = () : void => {
    this.gameover = true;
    this.toggleMisc(false);
    setTimeout(() => { this.canResetGame = true; }, this.resetGameTime);
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
      this.canResetGame = false;

      setTimeout(() => { this.enableEnemies = true; }, 1000);
      setTimeout(() => { this.enableCoins = true; }, 1500);
    }
  }; // resetGame

  /**
   * Function used to start the game, hidding game instrunctions
   */
  public gameStart = () => {
    if (!this.gameStarted) {
      this.hud.gameStart();
      setTimeout(() => { this.gameStarted = true; }, 200);
    }
  }; // gameStart

  /**
   * Function used to toggle the misc elements
   * Misc elements (Coins and enemies)
   * @param toggle
   */
  public toggleMisc = (toggle: boolean): void => {
    this.enableEnemies = toggle;
    this.enableCoins = toggle;
  }; // toggleMisc

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
      if (this.gameStarted) {
        this.score += 0.4;
      }
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

    this.hideLoader();

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
    setInterval(this.increaseSpeed, 1000);

    setTimeout(() => { this.enableEnemies = true; }, 1000);
    setTimeout(() => { this.enableCoins = true; }, 1500);
  };

}

export default new Game();
