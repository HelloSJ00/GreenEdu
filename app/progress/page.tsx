"use client";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { gameRecordsState } from "@/libs/recoil/gameRecordState";
import axios from "axios";

const Progress = () => {
  const gameRecords = useRecoilValue(gameRecordsState);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [gptResponse, setGptResponse] = useState<string>("");

  const onClickGameRecord = async (index: number) => {
    setFlippedIndex(index);
    const record = gameRecords[index];

    try {
      // GPT API 호출
      const response = await axios.post("/api/gpt", {
        incorrectAnswers: record.incorrect,
      });
      setGptResponse(
        response.data.result ||
          response.data.suggestions ||
          "No suggestions found"
      );

      // 텍스트 애니메이션 적용
      animateText(
        response.data.result ||
          response.data.suggestions ||
          "No suggestions found"
      );
    } catch (error) {
      console.error("Error calling GPT API", error);
      setGptResponse("API 호출 중 오류가 발생했습니다.");
    }
  };

  const animateText = (text: string) => {
    const container = document.getElementById("gptResponse");
    if (container) {
      container.innerHTML = "";
      text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.className = "text-animation";
        span.style.animationDelay = `${index * 0.05}s`;
        span.textContent = char;
        container.appendChild(span);
      });
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h2>게임 기록</h2>
      {gameRecords.map((record, index) => (
        <div
          key={index}
          onClick={() => onClickGameRecord(index)}
          className={`card ${
            flippedIndex === index ? "flipped" : ""
          } flex w-[300px] flex-col items-start bg-gray-200 rounded-lg border p-4 gap-4`}
        >
          <div className="card-front">
            <div className="text-[20px]">{record.startTime} 기록</div>
            <div className="font-bold">점수: {record.score}/10</div>
          </div>
          <div className="card-back">
            <div id="gptResponse"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Progress;
