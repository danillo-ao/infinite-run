import VGameProperties from "@values/game-properties.values";

class GameController {

  public score: number = 0;
  public speed: number = 100;

  /**
   * Função utilizada para definir os valores iniciais das propriedades do game
   */
  public setupGame = () => {
    window.gameProperties = VGameProperties;
  };

}

export default new GameController();
