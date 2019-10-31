class CanvasController {

  private width = (window.innerWidth * .7);
  private height = (window.innerHeight * .5);

  public canvas: HTMLCanvasElement;
  public context;

  public init = () => {
    const { gameProperties } = window;
    this.canvas = <HTMLCanvasElement> document.getElementById(gameProperties.canvasIdName);
    this.context = this.canvas.getContext("2d");
    // get canvas instance
    // set canvas dimensions
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.draw();
  };

  public draw = () => {
    // draw floor of canvas
    this.context.beginPath();
    this.context.lineWidth = 20;
    this.context.moveTo(0, this.canvas.height);
    this.context.lineTo(this.canvas.width, this.canvas.height);
    this.context.stroke();
    this.context.closePath();
  }

}

export default new CanvasController();
