"use client";
import React from "react";
import { useRecoilValue } from "recoil";
import { gameRecordsState } from "@/libs/recoil/gameRecordState";

const Progress = () => {
  const gameRecords = useRecoilValue(gameRecordsState);
  return (
    <div className="flex flex-col items-center gap-4">
      <h2>게임 기록</h2>
      {gameRecords.map((record, index) => (
        <div
          key={index}
          className="flex w-[300px] flex-col items-start bg-gray-200 rounded-lg border p-4 gap-4"
        >
          <div className="text-[20px]">{record.startTime} 기록</div>
          <div className="text-bold">점수: {record.score}/10</div>
        </div>
      ))}
    </div>
  );
};

export default Progress;
