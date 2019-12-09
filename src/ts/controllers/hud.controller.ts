import Game from "@controllers/game.controller";

class Hud {

  public score: Element;
  public coins: Element;
  public content: Element;

  constructor() {

    const HudContent = document.createElement("div");
    const ScoreContent = document.createElement("p");
    const CoinsContent = document.createElement("p");

    HudContent.style.width = `${Game.width}px`;
    HudContent.style.height = `${Game.height}px`;
    HudContent.classList.add('hud-content');

    ScoreContent.classList.add('score-content');
    CoinsContent.classList.add('coins-content');

    ScoreContent.textContent = `${Game.score}`;
    CoinsContent.textContent = `${Game.coins}`;

    HudContent.appendChild(ScoreContent);
    HudContent.appendChild(CoinsContent);

    this.content = HudContent;
    this.coins = CoinsContent;
    this.score = ScoreContent;
    document.getElementById(Game.bodyId).appendChild(HudContent);
  }

  countScore = (): void => {
    const score = Math.floor(Game.score);
    this.score.textContent = `${score}`;
  };

}

export default Hud;
