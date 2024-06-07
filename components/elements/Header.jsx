"use client";

import React from "react";
import Link from "next/link";
import LinkButton from "@/components/elements/LinkButton";
import Button from "@/components/elements/Button";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  authState,
  isLoggedInSelector,
  userTypeSelector,
} from "@/libs/recoil/authState";

const Header = () => {
  const [auth, setAuth] = useRecoilState(authState);
  const isLoggedIn = useRecoilValue(isLoggedInSelector);
  const userType = useRecoilValue(userTypeSelector);

  const onClickLogout = () => {
    alert("로그아웃 되었습니다.");
    setAuth("loggedOut");
  };

  return (
    <header className="bg-gradient-to-r from-green-800 to-green-400 p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50">
      <Link href="/" className="text-lg font-bold text-white">
        그린 에듀케이션
      </Link>
      {isLoggedIn ? (
        <div className="flex items-center">
          <div className="text-white mr-4">
            {userType === "user" ? "사용자" : "교육자"}로 로그인됨
          </div>
          <Button name="로그아웃 하기" onClick={onClickLogout} />
        </div>
      ) : (
        <LinkButton href="/login" name="로그인 하러가기" />
      )}
    </header>
  );
};

export default Header;
