export default class CanvasController {

  private width = (window.innerWidth * .7);
  private height = (window.innerHeight * .8);

  public init = () => {
    const { gameProperties } = window;

    const canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById(gameProperties.canvasIdName);
    canvas.width = this.width;
    canvas.height = this.height;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#eeeeee";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

}

