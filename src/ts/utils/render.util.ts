import Game from "@controllers/game.controller";

export const renderParallax = (
  context: CanvasRenderingContext2D,
  asset: HTMLImageElement,
  speed: number,
  offsetX: number,
  offsetY: number,
  targetW: number,
  targetH: number,
): number => {
  context.clearRect(0, 0, Game.width, Game.height);

  for(let i = 0; i < 3; i++){
    context.drawImage(
      asset,
      0,
      0,
      asset.width,
      asset.height,
      (offsetX + (i * asset.width)),
      offsetY,
      targetW,
      targetH
    );

    if (Game.showCollisors) {
      context.beginPath();
      context.strokeStyle = "#FF0000";
      context.rect((offsetX + (i * asset.width)), offsetY, targetW, targetH);
      context.stroke();
    }

  }

  return ((offsetX * -1) >= asset.width) ? (speed * -1) : (offsetX - speed);
};
