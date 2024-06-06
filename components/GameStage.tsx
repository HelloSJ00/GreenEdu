"use client";
import { useState } from "react";

const stages = [
  {
    image: "/images/pet-bottle.jpg",
    options: ["일반쓰레기", "음식물 쓰레기", "캔", "페트병", "박스"],
    answer: "페트병",
  },
  {
    image: "/images/banana-peel.jpg",
    options: ["일반쓰레기", "음식물 쓰레기", "캔", "페트병", "박스"],
    answer: "음식물 쓰레기",
  },
  {
    image: "/images/cardboard-box.jpg",
    options: ["일반쓰레기", "음식물 쓰레기", "캔", "페트병", "박스"],
    answer: "박스",
  },
  {
    image: "/images/aluminum-can.jpg",
    options: ["일반쓰레기", "음식물 쓰레기", "캔", "페트병", "박스"],
    answer: "캔",
  },
  {
    image: "/images/glass-bottle.jpg",
    options: ["일반쓰레기", "음식물 쓰레기", "유리병", "페트병", "박스"],
    answer: "유리병",
  },
  {
    image: "/images/plastic-bag.jpg",
    options: ["일반쓰레기", "음식물 쓰레기", "캔", "페트병", "비닐"],
    answer: "비닐",
  },
  {
    image: "/images/styrofoam.jpg",
    options: ["일반쓰레기", "음식물 쓰레기", "캔", "스티로폼", "박스"],
    answer: "스티로폼",
  },
  {
    image: "/images/newspaper.jpg",
    options: ["일반쓰레기", "음식물 쓰레기", "캔", "페트병", "종이"],
    answer: "종이",
  },
  {
    image: "/images/tin-can.jpg",
    options: ["일반쓰레기", "음식물 쓰레기", "캔", "페트병", "박스"],
    answer: "캔",
  },
  {
    image: "/images/egg-shells.jpg",
    options: ["일반쓰레기", "음식물 쓰레기", "캔", "페트병", "박스"],
    answer: "음식물 쓰레기",
  },
];

const GameStage = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer: string) => {
    if (answer === stages[currentStage].answer) {
      setScore(score + 1);
    }
    setCurrentStage(currentStage + 1);
  };

  if (currentStage >= stages.length) {
    return (
      <div>
        게임 종료! 점수: {score} / {stages.length}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <img src={stages[currentStage].image} alt="쓰레기" className="mb-4" />
      <div className="flex flex-wrap">
        {stages[currentStage].options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="bg-blue-500 text-white px-4 py-2 rounded m-2"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameStage;
