"use client";
import CustomHr from "../CustomHr";
import FormStep from "../FormStep";
import FullRange from "../FullRange";
import GrayFormStep from "../GrayFormStep";
import HeadingPersonal from "../HeadingPersonal";
import Range from "../Range";
import RadioDiv from "./RadioDiv";
import beginner from "../images/flower.svg";
import frame from "../images/Frame.svg";
import boost from "../images/boost.svg";
import expert from "../images/cup.svg";
import Link from "next/link";
export default function SecondStage() {
  return (
    <div className="bg-white mt-5 p-5 rounded-2xl max-w-[640px] mx-auto h-[525px]">
      <div className="flex items-center mt-[32px] max-w-[545px] mx-[auto] gap-4">
        <FormStep stage="1" />
        <FullRange />
        <FormStep stage="2" />
        <Range />
        <GrayFormStep stageTwo="3" />
        <Range />
        <GrayFormStep stageTwo="4" />
      </div>
      <CustomHr />
      <HeadingPersonal
        modalHeaderOne="Skill Level"
        modalParagraph="Please tell us about your skill level in frontend development."
      />
      <form>
        <div className="flex gap-10 mt-6 ml-6">
          <div>
            <RadioDiv srcImage={beginner} altText="flowers" level="Beginner" />
          </div>
          <div>
            <RadioDiv srcImage={frame} altText="Frame" level="Intermediate" />
          </div>
        </div>
        <div className="flex gap-10 mt-6 ml-6">
          <div>
            <RadioDiv srcImage={boost} altText="boost-image" level="Advance" />
          </div>
          <div className="mb-4">
            <RadioDiv srcImage={expert} altText="cup-image" level="Expert" />
          </div>
        </div>
        <CustomHr />
        <Link href='/third'>
          <button
            className="text-white w-[110px] ml-[460px] h-[41px] text-center mt-6  rounded-[10px] summit"
            type="submit"
          >
            Next Step
          </button>
        </Link>
      </form>
      <Link href="/">
        <button className="w-[110px] rounded-[10px] mt-[-2.5rem] ml-[1rem] absolute text-center h-[41px] go-back">
          Go back
        </button>
      </Link>
    </div>
  );
}
