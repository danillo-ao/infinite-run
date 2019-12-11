import { TEnemyType } from "@constants/enemies.types";

export interface IEnemy {
  x: number;
  y: number;
  w: number;
  h: number;
  frame: number;
  type: TEnemyType
}
