import {TEnemyType} from "@constants/enemies.types";

/**
 * Retorna um valor aleatório entre os definidos
 * @param min
 * @param max
 * @constructor
 */
export function Random (min: number, max: number): number {
  const random: number = (Math.random() * (max - min) + min);
  return parseFloat(random.toFixed(2));
}
