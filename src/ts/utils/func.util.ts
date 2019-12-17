import {TEnemyType} from "@constants/enemies.types";

/**
 * Returns a value random between the defineds
 * @param min
 * @param max
 * @constructor
 */
export function Random (min: number, max: number): number {
  const random: number = (Math.random() * (max - min) + min);
  return parseFloat(random.toFixed(2));
}

/**
 * Function used to get boolean, if a value is between two values
 * @param value
 * @param between1
 * @param between2
 */
export function getBetween (value: number, between1: number, between2: number): boolean {
  return ((value > between1 && value < between2) || (value > between2 && value < between1));
}

/**
 * Function used to get boolean, if a value is between OR equal two values
 * @param value
 * @param between1
 * @param between2
 */
export function getBetweenOrEqual (value: number, between1: number, between2: number): boolean {
  return (
    (value >= between1 && value <= between2) ||
    (value >= between2 && value <= between1)
  );
}
