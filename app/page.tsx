"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { isLoggedInSelector, userTypeSelector } from "@/libs/recoil/authState";
import LinkButton from "@/components/elements/LinkButton";

const Home = () => {
  const router = useRouter();
  const isLoggedIn = useRecoilValue(isLoggedInSelector);
  const userType = useRecoilValue(userTypeSelector);

  useEffect(() => {
    if (isLoggedIn) {
      if (userType === "educator") {
        router.push("/educator");
      } else if (userType === "user") {
        router.push("/home");
      }
    }
  }, [isLoggedIn, userType, router]);

  return (
    <div className="flex items-center justify-center p-4">
      <LinkButton href="/login" name="로그인 하러가기" />
    </div>
  );
};

export default Home;
