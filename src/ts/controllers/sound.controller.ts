import Game from "@controllers/./game.controller";

class Sound {

  private coins: HTMLAudioElement;

  constructor() {
    const coinAudioElement: HTMLAudioElement = document.createElement("audio");
    coinAudioElement.src = "src/assets/sound/coin9.wav";

    this.coins = coinAudioElement;

    document.body.append(coinAudioElement);
  }

  public getCoin = () => {
    this.coins.currentTime = 0;
    this.coins.play();
  };

}

export default Sound;
