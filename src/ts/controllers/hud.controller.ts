import Game from "@controllers/game.controller";

class Hud {

  public score: HTMLParagraphElement;
  public coins: HTMLParagraphElement;
  public gameover: HTMLDivElement;
  public content: HTMLDivElement;
  public gamestart: HTMLDivElement;

  public gameoverPlayAgain: HTMLParagraphElement;
  public gameoverCoins: HTMLDivElement;
  public gameoverScore: HTMLDivElement;

  constructor() {

    const HudContent: HTMLDivElement = document.createElement("div");
    const GameOverContent: HTMLDivElement = document.createElement("div");
    const ScoreContent: HTMLParagraphElement = document.createElement("p");
    const CoinsContent: HTMLParagraphElement = document.createElement("p");
    const GameStartContent: HTMLDivElement = document.createElement("div");
    const GameStartLabel: HTMLParagraphElement = document.createElement("p");

    // create elements to gameover view
    const GameOverLabelContent: HTMLDivElement = document.createElement("div");
    const GameOverLabel: HTMLParagraphElement = document.createElement("p");
    const GameOverResetGame: HTMLParagraphElement = document.createElement("p");

    const GameOverScoresContent: HTMLDivElement = document.createElement("div");
    const GameOverScoresColumnScore: HTMLDivElement = document.createElement("div");
    const GameOverScoresColumnCoins: HTMLDivElement = document.createElement("div");

    // styles of elements to gameOver view
    GameStartContent.classList.add("gamestart-content");
    GameStartLabel.classList.add("blink");
    GameStartLabel.style.margin = "0";
    GameStartLabel.style.width = "100%";
    GameStartLabel.style.textAlign = "center";
    GameStartLabel.style.display = "table";
    GameStartLabel.textContent = 'Press any key or click to start!';

    GameOverLabelContent.style.width = '100%';
    GameOverLabelContent.style.display = 'flex';
    GameOverLabelContent.style.justifyContent = 'center';
    GameOverLabelContent.style.alignItems = 'center';

    GameOverLabel.textContent = "Game Over!";
    GameOverLabel.style.fontSize = "40px";
    GameOverLabel.style.margin = "0";
    GameOverLabel.style.position = "relative";
    GameOverLabel.style.transform = "translateY(-11px)";

    GameOverScoresContent.style.width = "100%";
    GameOverScoresContent.style.position = "absolute";
    GameOverScoresContent.style.left = "0";
    GameOverScoresContent.style.top = "100%";
    GameOverScoresContent.style.fontSize = "13px";
    GameOverScoresContent.style.display = "flex";
    GameOverScoresContent.style.flexDirection = "row";

    GameOverScoresColumnScore.style.display = "flex";
    GameOverScoresColumnScore.style.flex = "1";
    GameOverScoresColumnScore.style.justifyContent = "flex-start";
    GameOverScoresColumnScore.textContent = "score: ";

    GameOverScoresColumnCoins.style.display = "flex";
    GameOverScoresColumnCoins.style.flex = "1";
    GameOverScoresColumnCoins.style.justifyContent = "flex-end";
    GameOverScoresColumnCoins.textContent = "coins: ";

    GameOverResetGame.style.display = "none";
    GameOverResetGame.style.position = "absolute";
    GameOverResetGame.style.width = "100%";
    GameOverResetGame.style.height = "30px";
    GameOverResetGame.style.bottom = "10%";
    GameOverResetGame.style.alignItems = "center";
    GameOverResetGame.style.justifyContent = "center";
    GameOverResetGame.style.fontSize = "13px";
    GameOverResetGame.style.textAlign = "center";
    GameOverResetGame.classList.add("blink");
    GameOverResetGame.textContent = "Press any key to play again!";

    // mount components adding one inside another
    GameOverScoresContent.appendChild(GameOverScoresColumnScore);
    GameOverScoresContent.appendChild(GameOverScoresColumnCoins);
    GameOverLabel.appendChild(GameOverScoresContent);

    GameOverLabelContent.appendChild(GameOverLabel);
    GameOverContent.appendChild(GameOverLabelContent);
    GameOverContent.appendChild(GameOverResetGame);

    GameStartContent.appendChild(GameStartLabel);

    // style set
    HudContent.style.width = `${Game.width}px`;
    HudContent.style.height = `${Game.height}px`;
    GameOverContent.style.display = "none";

    // class add
    HudContent.classList.add("hud-content");
    GameOverContent.classList.add("gameover-content");
    ScoreContent.classList.add("score-content");
    CoinsContent.classList.add("coins-content");

    // texts append
    ScoreContent.textContent = `score: ${Game.score}`;
    CoinsContent.textContent = `coins: ${Game.coinsBalance}`;

    // append to doc
    HudContent.appendChild(ScoreContent);
    HudContent.appendChild(CoinsContent);
    HudContent.appendChild(GameOverContent);
    HudContent.appendChild(GameStartContent);

    // set class values
    this.coins = CoinsContent;
    this.score = ScoreContent;
    this.content = HudContent;
    this.gameover = GameOverContent;
    this.gamestart = GameStartContent;
    this.gameoverScore = GameOverScoresColumnScore;
    this.gameoverCoins = GameOverScoresColumnCoins;
    this.gameoverPlayAgain = GameOverResetGame;
    document.getElementById(Game.bodyId).appendChild(HudContent);
  }

  countScore = (): void => {
    const score = Math.floor(Game.score);
    this.score.textContent = `score: ${score}`;
    this.coins.textContent = `coins: ${Game.coinsBalance}`;
  };

  /**
   * this function shows the gameover label to player
   */
  public showGameOver = (): void => {
    const score = Math.floor(Game.score);

    this.gameover.style.display = "flex";
    this.gameoverScore.textContent = `score: ${score}`;
    this.gameoverCoins.textContent = `coins: ${Game.coinsBalance}`;

    setTimeout(() => { this.gameoverPlayAgain.style.display = "flex"; }, Game.resetGameTime);
  }; // showGameOver

  /**
   * this function hide the gameover content to player play again
   */
  public hideGameOver = (): void => {
    this.gameover.style.display = "none";
    this.gameoverPlayAgain.style.display = "none";
  }; // hideGameOver

  /**
   * Used to hide the game start instrunctions
   */
  public gameStart = (): void => {
    this.gamestart.style.display = "none";
  }; // gameStart

}

export default Hud;
