"use client";
import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { isLoggedInSelector } from "@/libs/recoil/authState";

const Educator = () => {
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
        href="/progress"
        className="bg-purple-500 text-white px-4 py-2 rounded mb-2"
      >
        학습진행상황 알아보기
      </Link>
    </div>
  );
};

export default Educator;
