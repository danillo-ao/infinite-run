import {TCoinsState} from '@constants/coins.types';

export interface ICoin {
  x: number;
  y: number;
  w: number;
  h: number;
  frame: number;
  state: TCoinsState,
}

export interface ICoinsPrefab {
  rows: number;
  columns: number;
  addY: number;
}
