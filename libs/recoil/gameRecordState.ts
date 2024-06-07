import { atom } from "recoil";

interface GameRecord {
  startTime: string;
  score: number;
}

export const gameRecordsState = atom<GameRecord[]>({
  key: "gameRecordsState",
  default: [],
});
