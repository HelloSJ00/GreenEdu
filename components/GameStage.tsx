"use client";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { gameRecordsState } from "@/libs/recoil/gameRecordState";
import Button from "@/components/elements/Button";
import LinkButton from "@/components/elements/LinkButton";
import { GameRecord, IncorrectAnswer } from "@/types/types";

const stages = [
  {
    image: "/image/pet.png",
    options: ["일반쓰레기", "음식물 쓰레기", "캔", "페트병", "박스"],
    answer: "페트병",
  },
  {
    image: "/image/umsse.png",
    options: ["일반쓰레기", "음식물 쓰레기", "캔", "페트병", "박스"],
    answer: "음식물 쓰레기",
  },
  {
    image: "/image/box.png",
    options: ["일반쓰레기", "음식물 쓰레기", "캔", "페트병", "박스"],
    answer: "박스",
  },
  {
    image: "/image/can.png",
    options: ["일반쓰레기", "음식물 쓰레기", "캔", "페트병", "박스"],
    answer: "캔",
  },
  {
    image: "/image/glass.png",
    options: ["일반쓰레기", "음식물 쓰레기", "유리병", "페트병", "박스"],
    answer: "유리병",
  },
  {
    image: "/image/plastic.png",
    options: ["일반쓰레기", "음식물 쓰레기", "캔", "페트병", "비닐"],
    answer: "비닐",
  },
  {
    image: "/image/stiroform.png",
    options: ["일반쓰레기", "음식물 쓰레기", "캔", "스티로폼", "박스"],
    answer: "스티로폼",
  },
  {
    image: "/image/paper.png",
    options: ["일반쓰레기", "음식물 쓰레기", "캔", "페트병", "종이"],
    answer: "종이",
  },
  {
    image: "/image/can.png",
    options: ["일반쓰레기", "음식물 쓰레기", "캔", "페트병", "박스"],
    answer: "캔",
  },
  {
    image: "/image/umsse.png",
    options: ["일반쓰레기", "음식물 쓰레기", "캔", "페트병", "박스"],
    answer: "음식물 쓰레기",
  },
];
// types.ts

const GameStage = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState<IncorrectAnswer[]>(
    []
  );
  const [gameStartTime, setGameStartTime] = useState<string | null>(null);
  const [gameRecords, setGameRecords] =
    useRecoilState<GameRecord[]>(gameRecordsState);

  useEffect(() => {
    const getCurrentTime = (): string => {
      const now = new Date();
      return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };

    setGameStartTime(getCurrentTime());
  }, []);

  const handleAnswer = (answer: string) => {
    if (answer === stages[currentStage].answer) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers((prevIncorrect) => [
        ...prevIncorrect,
        { stage: currentStage + 1, selected: answer },
      ]);
    }
    setCurrentStage(currentStage + 1);
  };

  useEffect(() => {
    if (currentStage >= stages.length && gameStartTime) {
      const newRecord: GameRecord = {
        startTime: gameStartTime,
        score: score,
        incorrect: incorrectAnswers,
      };
      setGameRecords((prevRecords) => [...prevRecords, newRecord]);
      console.log("새로운 기록이 저장되었습니다:", newRecord);
    }
  }, [currentStage, gameStartTime, score, incorrectAnswers, setGameRecords]);

  if (currentStage >= stages.length) {
    return (
      <div className="flex flex-col gap-4">
        <div>
          게임 종료! 점수: {score} / {stages.length}
        </div>
        <LinkButton name="홈으로 돌아가기" href="/" />
        <LinkButton name="진행 상황 확인하기" href="/progress" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <img src={stages[currentStage].image} alt="쓰레기" className="mb-4" />
      <div className="flex flex-wrap gap-4">
        {stages[currentStage].options.map((option) => (
          <Button
            key={option}
            name={option}
            onClick={() => handleAnswer(option)}
          />
        ))}
      </div>
    </div>
  );
};

export default GameStage;
