export type TMoveState = "running" | "jumping" | "dash" | string;

export type TPlayerAssets = {
  running: {
    source: string;
    frameW: number;
    frameH: number;
    frames: number;
  };
  jumping: {
    source: string;
    frameW: number;
    frameH: number;
    frames: number;
  };
  dash: {
    source: string;
    frameW: number;
    frameH: number;
    frames: number;
  };
}
