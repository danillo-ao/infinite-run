import * as sounds from "@values/sounds.assets.json";

class Sound {

  private coinsFX: HTMLAudioElement;
  private jumpFX: HTMLAudioElement;

  constructor() {
    const coinAudioElement: HTMLAudioElement = document.createElement("audio");
    coinAudioElement.src = sounds.coins;

    const jumpAudioElement: HTMLAudioElement = document.createElement("audio");
    jumpAudioElement.src = sounds.jump;

    this.coinsFX = coinAudioElement;
    this.jumpFX = jumpAudioElement;

    document.body.append(coinAudioElement);
    document.body.append(jumpAudioElement);
  }

  /**
   * Apply coins sound
   */
  public getCoin = (): void => {
    this.coinsFX.currentTime = 0;
    this.coinsFX.play();
  }; // getCoin

  /**
   * Apply sound when player jump
   */
  public jump = (): void => {
    this.jumpFX.volume = 0.5;
    this.jumpFX.currentTime = 0;
    this.jumpFX.play();
  }; // jump

}

export default Sound;
