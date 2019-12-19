import Game from "@controllers/game.controller";

class Hud {

  public score: HTMLParagraphElement;
  public coins: HTMLParagraphElement;
  public gameover: HTMLDivElement;
  public content: HTMLDivElement;

  constructor() {

    const HudContent: HTMLDivElement = document.createElement("div");
    const GameOverContent: HTMLDivElement = document.createElement("div");
    const ScoreContent: HTMLParagraphElement = document.createElement("p");
    const CoinsContent: HTMLParagraphElement = document.createElement("p");

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
    GameOverContent.textContent = "Game Over!";
    ScoreContent.textContent = `${Game.score}`;
    CoinsContent.textContent = `${Game.coinsBalance}`;

    // append to doc
    HudContent.appendChild(ScoreContent);
    HudContent.appendChild(CoinsContent);
    HudContent.appendChild(GameOverContent);

    // set class values
    this.coins = CoinsContent;
    this.score = ScoreContent;
    this.content = HudContent;
    this.gameover = GameOverContent;
    document.getElementById(Game.bodyId).appendChild(HudContent);
  }

  countScore = (): void => {
    const score = Math.floor(Game.score);
    this.score.textContent = `${score}`;
    this.coins.textContent = `${Game.coinsBalance}`;
  };

  /**
   * this function shows the gameover label to player
   */
  public showGameOver = (): void => {
    this.gameover.style.display = "flex";
  }; // showGameOver

}

export default Hud;
