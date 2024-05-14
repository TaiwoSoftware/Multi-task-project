import CustomHr from "../CustomHr";
import FormStep from "../FormStep";
import FullRange from "../FullRange";
import GrayishBackground from "../GrayishBackground";
import HeadingPersonal from "../HeadingPersonal";

export default function FourthStage() {
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
      <div className="ml-6">
        <div className=" grid gap-6 grid-cols-3 ">
          <GrayishBackground title="Full name" titleName="Akerele Taiwo" />
          <GrayishBackground title="Email Address" titleName="davcodes24@gmail.com" />
          <GrayishBackground title="Phone number" titleName="+2349162855174" />
        </div>
        <div className=" grid gap-6 grid-cols-3 ">
          <GrayishBackground title="Portfolio/GitHub Link" titleName="github.com/davcodin" />
          <GrayishBackground title="Skill level" titleName="Intermediate" />
          <GrayishBackground title="Challenge Preference" titleName="Typescript" />
        </div>
      </div>
      <CustomHr />
    </div>
  );
}
