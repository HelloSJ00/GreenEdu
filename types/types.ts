export interface IncorrectAnswer {
  stage: number;
  selected: string;
}
export interface GameRecord {
  startTime: string;
  score: number;
  incorrect: IncorrectAnswer[];
}
