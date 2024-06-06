"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { isLoggedInSelector } from "@/libs/recoil/authState";

const Home = () => {
  const router = useRouter();
  const isLoggedIn = useRecoilValue(isLoggedInSelector);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);
  return (
    <div className="flex flex-col items-center justify-between h-[500px] gap-6">
      <Link
        href="/game"
        className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
      >
        게임 시작하기
      </Link>
      <Link
        href="/learn"
        className="bg-green-500 text-white px-4 py-2 rounded mb-2"
      >
        환경 보호 활동 배우기
      </Link>
      <Link
        href="/tips"
        className="bg-yellow-500 text-white px-4 py-2 rounded mb-2"
      >
        쓰레기 줄이는 팁 알아보기
      </Link>
      <Link
        href="/progress"
        className="bg-purple-500 text-white px-4 py-2 rounded mb-2"
      >
        학습진행상황 알아보기
      </Link>
      <Link
        href="/feedback"
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        피드백 받아보기
      </Link>
    </div>
  );
};

export default Home;
