import VGameProperties from "@values/game-properties.values";

export default class GameController {

  /**
   * Função utilizada para definir os valores iniciais das propriedades do game
   */
  public setupGame = () => {
    window.gameProperties = VGameProperties;
  };

}
