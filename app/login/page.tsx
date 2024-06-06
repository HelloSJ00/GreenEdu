"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { authState } from "@/libs/recoil/authState";

const Login = () => {
  const [userType, setUserType] = useState("");
  const [auth, setAuth] = useRecoilState(authState);
  const router = useRouter();

  const handleLogin = () => {
    if (userType === "user") {
      setAuth("user");
      router.push("/home");
    } else if (userType === "educator") {
      setAuth("educator");
      router.push("/educator");
    } else {
      alert("사용자 유형을 선택해 주세요.");
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mb-4">로그인 페이지</h1>
      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            name="userType"
            value="user"
            checked={userType === "user"}
            onChange={() => setUserType("user")}
            className="mr-2"
          />
          사용자로 로그인하기
        </label>
        <label>
          <input
            type="radio"
            name="userType"
            value="educator"
            checked={userType === "educator"}
            onChange={() => setUserType("educator")}
            className="mr-2"
          />
          교육자로 로그인하기
        </label>
      </div>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        로그인하기
      </button>
    </div>
  );
};

export default Login;
