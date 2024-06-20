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
    // setFlippedIndex(index);
    // const record = gameRecords[index];
    // try {
    //   // GPT API 호출
    //   const response = await axios.post("/api/gpt", {
    //     incorrectAnswers: record.incorrect,
    //   });
    //   const resultText =
    //     response.data.result ||
    //     response.data.suggestions ||
    //     "No suggestions found";
    //   setGptResponse(""); // 기존 텍스트 초기화
    //   animateText(resultText);
    // } catch (error) {
    //   console.error("Error calling GPT API", error);
    //   animateText("API 호출 중 오류가 발생했습니다.");
    // }
    setGptResponse(
      "해당 게임기록에서의 오답은 유리병과 음식물쓰레기의 빈도가 다른 유형의 쓰레기들보다 높게 나타납니다. 이에 따라 유리병과 음식물쓰레기에 대한 추가 학습이 필요합니다."
    ); // 기존 텍스트 초기화
    animateText(gptResponse);
  };

  const animateText = (text: string) => {
    let index = 0;
    const container = document.getElementById("gptResponse");

    // container가 null인 경우에 대한 예외 처리
    if (!container) {
      console.error("Element with id 'gptResponse' not found.");
      return;
    }

    container.innerHTML = ""; // 기존 텍스트 초기화

    const intervalId = setInterval(() => {
      if (index < text.length) {
        container.innerHTML += text[index];
        index++;
      } else {
        clearInterval(intervalId); // 모든 글자가 나타나면 interval 종료
      }
    }, 50); // 50ms 간격으로 글자 추가
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
