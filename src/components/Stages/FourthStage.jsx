"use client";
import { useEffect, useState } from "react";
import CustomHr from "../CustomHr";
import FormStep from "../FormStep";
import FullRange from "../FullRange";
import GrayishBackground from "../GrayishBackground";
import HeadingPersonal from "../HeadingPersonal";
import Link from "next/link";

export default function FourthStage() {
  // State variables to hold user information
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTel, setUserTel] = useState("");
  const [userLink, setUserLink] = useState("");
  const [userLevel, setUserLevel] = useState("");
  const [userPreference, setUserPreference] = useState("");

  // useEffect to fetch data from localStorage when component mounts
  useEffect(() => {
    // Check if localStorage is available
    if (typeof localStorage !== "undefined") {
      // Retrieve user information from localStorage
      setUserName(localStorage.getItem("name") || "");
      setUserEmail(localStorage.getItem("email") || "");
      setUserTel(localStorage.getItem("tel") || "");
      setUserLink(localStorage.getItem("link") || "");
      setUserLevel(localStorage.getItem("level") || "");
      setUserPreference(localStorage.getItem("preference") || "");
    }
  }, []); // Run only once when component mounts

  return (
    <div className="bg-white mt-5 p-5 shadow-xl rounded-2xl max-w-[640px] mx-auto h-[525px]">
      <div className="flex items-center mt-[32px] max-w-[545px] mx-[auto] gap-4">
        <FormStep stage="1" />
        <FullRange />
        <FormStep stage="2" />
        <FullRange />
        <FormStep stage="3" />
        <FullRange />
        <FormStep stage="4" />
      </div>
      <CustomHr />
      <HeadingPersonal
        modalHeaderOne="Review and Confirm"
        modalParagraph="Please review your information to make sure everything is accurate."
      />
      <div className="ml-2">
        <div className="grid gap-6 grid-cols-3 w-full">
          <GrayishBackground title="Full name" titleName={userName} />
          <GrayishBackground title="Email Address" titleName={userEmail} />
          <GrayishBackground title="Phone number" titleName={userTel} />
        </div>
        <div className="grid gap-6 grid-cols-3">
          <GrayishBackground
            title="Portfolio/GitHub Link"
            titleName={userLink}
          />
          <GrayishBackground title="Skill level" titleName={userLevel} />
          <GrayishBackground
            title="Challenge Preference"
            titleName={userPreference}
          />
        </div>
      </div>
      <CustomHr />
      <div className="relative">
        <Link href="/final">
          <button
            type="submit"
            className="text-white w-[110px] ml-[460px] h-[41px] text-center mt-6  rounded-[10px] summit"
          >
            Next step
          </button>
        </Link>
        <button className="w-[110px] rounded-[10px] absolute left-6 top-6 text-center h-[41px] go-back">
          Go back
        </button>
      </div>
    </div>
  );
}
