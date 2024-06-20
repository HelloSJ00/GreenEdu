import { atom } from "recoil";
import { GameRecord } from "@/types/types";

export const gameRecordsState = atom<GameRecord[]>({
  key: "gameRecordsState",
  default: [],
});
