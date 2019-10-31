import IGameProperties from "@interfaces/game-properties.interface";

declare global {
  interface Window {
    gameProperties: IGameProperties;
  }
}
