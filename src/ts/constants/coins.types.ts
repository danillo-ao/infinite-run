import {ICoinsPrefab} from '@interfaces/coins.interface';

export type TCoinsState = string | "spinning";
export type TCoinsPrefabsTypes = "fivebyone" | "fivebytwo" | "fivebythree" | "threebythree";

export type TCoinsPrefabs = {
  [prefabType in TCoinsPrefabsTypes]: ICoinsPrefab;
};
