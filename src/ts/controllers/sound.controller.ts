import * as sounds from "@values/sounds.assets.json";

class Sound {

  private coinsFX: HTMLAudioElement;
  private jumpFX: HTMLAudioElement;

  constructor() {
    const coinAudioElement: HTMLAudioElement = this.createSoundElement(sounds.coins);
    const jumpAudioElement: HTMLAudioElement = this.createSoundElement(sounds.jump);

    this.coinsFX = coinAudioElement;
    this.jumpFX = jumpAudioElement;
  }

  /**
   * Function used to create an sound element to the game, and add they to the game scene
   * @param source
   */
  public createSoundElement = (source: string): HTMLAudioElement => {
    const audio: HTMLAudioElement = document.createElement("audio");
    audio.autoplay = true;
    audio.src = source;

    document.body.append(audio);
    return audio;
  };

  /**
   * Apply coins sound
   */
  public getCoin = (volume: number = 1): void => {
    this.coinsFX.volume = volume;
    this.coinsFX.currentTime = 0;
    this.coinsFX.play();
  }; // getCoin

  /**
   * Apply sound when player jump
   */
  public jump = (volume:number = 0.5): void => {
    this.jumpFX.volume = volume;
    this.jumpFX.currentTime = 0;
    this.jumpFX.play();
  }; // jump

}

export default Sound;
