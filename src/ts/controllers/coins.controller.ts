import Game from "@controllers/./game.controller"
import GameObject from "@global/game-object.class";
import * as coinsAssets from "@values/coins.assets.json";

import {ICoin, ICoinsPrefab} from '@interfaces/coins.interface';
import {TCoinsPrefabs, TCoinsPrefabsTypes, TCoinsState} from '@constants/coins.types';
import {collisionByPixel, Random} from '@utils/func.util';
import {renderCollisors} from '@utils/render.util';

class Coins extends GameObject {
  // private values
  public coins: ICoin[] = [];
  private interval: number;
  private minSeconds: number = 1;
  private maxSeconds: number = 3;
  // define the prefabs os coins structures
  private prefabs: TCoinsPrefabs = {
    fivebyone: { rows: 1, columns: 5, addY: 30 },
    fivebytwo: { rows: 2, columns: 5, addY: 15 },
    fivebythree: { rows: 3, columns: 5, addY: 0 },
    threebythree: { rows: 3, columns: 3, addY: 0 },
  };
  // public values
  public state: TCoinsState = "spinning";
  constructor() {
    super(coinsAssets.path);
    this.setupCoins(2000);
  }

  /**
   * Return an prefab type of coins
   */
  private getRandomPrefabType = (): ICoinsPrefab => {
    const types: TCoinsPrefabsTypes[] = ["fivebyone", "fivebytwo", "fivebythree", "threebythree"];
    return this.prefabs[types[Math.floor(Math.random() * types.length)]];
  };

  /**
   * Use to detect a pixel collision with the player
   * @param coin
   */
  private handleCoinCollision = (coin): boolean => {
    const player = Game.player;
    const collision = collisionByPixel(this.canvas, player.canvas, coin.x, coin.y, coin.w, coin.h);
    if (collision) {
      Game.sound.getCoin();
      Game.addCointBalance();
    }
    return collision;
  }; // handleCoinCollision

  /**
   * Create the coins, based on prefab positions
   */
  private createCoins = (): void => {
    const coins: ICoin[] = [];
    const prefab: ICoinsPrefab = this.getRandomPrefabType();
    // start positions of the coins
    const startX: number = this.canvas.width;
    const startY: number = (this.canvas.height / 2) + prefab.addY;
    // coins generic values
    const spacing: number = 10;
    const asset = coinsAssets[this.state];

    for (let row:number = 0; row < prefab.rows; row++) {
      for (let column: number = 0; column < prefab.columns; column++) {
        const coinX: number = (startX + (column * asset.width) + (column * spacing));
        const coinY: number = (startY + (row * asset.height) + (row * spacing));
        // push new coin settings
        coins.push({
          frame: 0,
          state: this.state,
          h: asset.height,
          w: asset.width,
          x: coinX,
          y: coinY,
        });
      }
    }

    this.coins = [...this.coins, ...coins];
  }; // createCoins

  /**
   * Render the coins in the scene
   */
  public render(): void {
    this.ctx.clearRect(0, 0, Game.width, Game.height);

    const coins: ICoin[] = this.coins.map((coin: ICoin) => {
      const coinValues = coinsAssets[coin.state];
      const frameX = (coin.frame * coin.w);
      const frameY = coinValues.offsetY;

      this.ctx.drawImage(
        this.asset,
        frameX,
        frameY,
        coin.w,
        coin.h,
        coin.x,
        coin.y,
        coin.w,
        coin.h
      );

      const collision = this.handleCoinCollision(coin);
      renderCollisors(this.ctx, coin.x, coin.y, coin.w, coin.h);
      coin.frame = ((coin.frame + 1) >= coinValues.frames) ? coinValues.repeatFrom : (coin.frame + 1);
      coin.x -= Game.miscSpeed;

      if ((coin.x + coin.w < 0) || collision) { return null; }
      return coin;
    });

    this.coins = coins.filter((coin: ICoin) => !!coin);
  } // render

  private setupCoins = (interval: number): void => {
    this.interval = setInterval(() => {
      clearInterval(this.interval);
      this.createCoins();
      const intervalTime = Random(this.minSeconds, this.maxSeconds);
      this.setupCoins(intervalTime * 1000);
    }, interval);
  }; // setupEnemies

}

export default Coins;
