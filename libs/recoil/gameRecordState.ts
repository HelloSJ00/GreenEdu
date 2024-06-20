import { atom } from "recoil";
import { GameRecord } from "@/types/types";

export const gameRecordsState = atom<GameRecord[]>({
  key: "gameRecordsState",
  default: [{ startTime: "오후 03:30", score: 3, incorrect: [] }],
});
