import Game from "@controllers/game.controller";

export const renderParallax = (context, asset, speed, offsetX): number => {
  for(let i = 0; i < 2; i++){
    context.drawImage(
      asset,
      0,
      0,
      asset.width,
      asset.height,
      (offsetX + (i * asset.width)),
      0,
      Game.width,
      Game.height
    );
  }

  return ((offsetX * -1) >= Game.width) ? (speed * -1) : (offsetX - speed);
};

