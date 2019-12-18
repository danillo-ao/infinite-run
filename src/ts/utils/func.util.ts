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
} // getBetween

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
} // getBetweenOrEqual

/**
 * Used to detect an colision between two elements, based on they coords
 * @param obj1X
 * @param obj1Y
 * @param obj1W
 * @param obj1H
 * @param obj2X
 * @param obj2Y
 * @param obj2W
 * @param obj2H
 * @param spaceFrame
 */
export function getCollision (
  obj1X: number,
  obj1Y: number,
  obj1W: number,
  obj1H: number,
  obj2X: number,
  obj2Y: number,
  obj2W: number,
  obj2H: number,
  spaceFrame: number = 5,
): boolean {

  // object one values
  const obj1x: number = (obj1X + spaceFrame);
  const obj1mx: number = ((obj1X + obj1W) - spaceFrame);
  const obj1y: number = (obj1Y + spaceFrame);
  const obj1my: number = ((obj1Y + obj1H) - spaceFrame);

  // object two values
  const obj2x: number = (obj2X + spaceFrame);
  const obj2mx: number = ((obj2X + obj2W) - spaceFrame);
  const obj2y: number = (obj2Y + spaceFrame);
  const obj2my: number = ((obj2Y + obj2H) - spaceFrame);

  // detect collisions in both axios
  const collisionX: boolean = (getBetweenOrEqual(obj1x, obj2x, obj2mx) || getBetweenOrEqual(obj1mx, obj2x, obj2mx));
  const collisionY: boolean = (getBetweenOrEqual(obj1y, obj2y, obj2my) || getBetweenOrEqual(obj1my, obj2y, obj2my));

  // return the collision
  return (collisionX && collisionY);
} // getCollision


/**
 * Used to get an map of pixels of imageData, returnin an array with 0 or 1 to pixel defined
 * @param imageData
 */
export function getPixelMap (imageData: ImageData): number[] {
  // Get the data of image
  const data = imageData.data;
  // create an empty map
  const map = [];

  // Read every pixel data from imageData
  for (let i = 0 ; i < data.length ; i += 4) {
    // Get the fourth data of pixel, this is the Alpha value. If this value is 0, means that pixel is transparent
    if(data[i+3] === 0) {
      map.push(0);
    } else {
      // if the alpha value isn't 0, means that pixel has an color information, so, it's defined
      map.push(1);
    }
  }

  // return the map
  return map;
}

/**
 * Used to detect an collision of PIXELs between two canvas. This function will read EVERY pixel os canvas, and see if
 * they have a pixel value defined in the same coordinate.
 *
 * If just ONE pixel collide with the another canvas, this function will return true.
 * @param canvas1
 * @param canvas2
 */
export function collisionByPixel (canvas1: HTMLCanvasElement, canvas2: HTMLCanvasElement): boolean {
  // get canvas image data
  const data = canvas1.getContext("2d").getImageData(0, 0, canvas1.width, canvas1.height);
  const data2 = canvas2.getContext("2d").getImageData(0, 0, canvas2.width, canvas2.height);

  // get the map of pixels
  const map1 = getPixelMap(data);
  const map2 = getPixelMap(data2);

  // start value of collision
  let collision: boolean = false;
  // read both of pixel maps, to see if they have an pixel information in the same coordinate
  map1.forEach((pixel, index) => {
    if (pixel === 1 && map2[index] === 1) {
      collision = true;
      return;
    }
  });

  // return the collision
  return collision;
} // collisionByPixel
