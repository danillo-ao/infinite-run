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

    renderCollisors(context, (offsetX + (i * asset.width)), offsetY, targetW, targetH);
  }

  return ((offsetX * -1) >= asset.width) ? (speed * -1) : (offsetX - speed);
}; // renderParallax


export const renderCollisors = (ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number): void => {
  if (Game.showCollisors) {
    ctx.beginPath();
    ctx.strokeStyle = "#FF0000";
    ctx.rect(x, y, w, h);
    ctx.stroke();
  }
};
