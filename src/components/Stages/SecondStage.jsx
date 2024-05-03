"use client";
import Inputs from "../Auth/Inputs";
import CustomHr from "../CustomHr";
import FormStep from "../FormStep";
import FullRange from "../FullRange";
import GrayFormStep from "../GrayFormStep";
import HeadingPersonal from "../HeadingPersonal";
import Range from "../Range";
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
            <Inputs
              labelFor="userName"
              labelText="Full Name"
              type="text"
              innerText="John Doe"
            />
          </div>
          <div>
            <Inputs
              labelFor="Email"
              labelText="Email Address"
              type="email"
              innerText="johndoe24@gmail.com"
            />
          </div>
        </div>
        <div className="flex gap-10 mt-6 ml-6">
          <div>
            <Inputs
              labelFor="tel"
              labelText="Phone Number"
              type="tel"
              innerText="+91-1234-0890"
            />
          </div>
          <div className="mb-4">
            <Inputs
              labelFor="link"
              labelText="Portfolio/GitHub Link"
              type="text"
              innerText="github.com/taiwosoftware"
            />
          </div>
        </div>
        <CustomHr />
        <button
          className="text-white w-[110px] ml-[460px] h-[41px] text-center mt-6  rounded-[10px] summit"
          type="submit"
        >
          Next Step
        </button>
      </form>
    </div>
  );
}