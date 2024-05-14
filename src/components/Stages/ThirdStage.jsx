import Link from "next/link";
import CustomHr from "../CustomHr";
import FormStep from "../FormStep";
import FullRange from "../FullRange";
import GrayFormStep from "../GrayFormStep";
import HeadingPersonal from "../HeadingPersonal";
import Range from "../Range";
import CheckDiv from "./CheckDiv";

export default function ThirdStage() {
  return (
    <div className="bg-white shadow-xl mt-5 p-5 rounded-2xl max-w-[640px] mx-auto h-[525px]">
      <div className="flex items-center mt-[32px] max-w-[545px] mx-[auto] gap-4">
        <FormStep stage="1" />
        <FullRange />
        <FormStep stage="2" />
        <FullRange />
        <FormStep stage="3" />
        <Range />
        <GrayFormStep stageTwo="4" />
      </div>
      <CustomHr />
      <HeadingPersonal
        modalHeaderOne="Challenge Preference"
        modalParagraph="Please tell us which frontend challenges you would like to participate in"
      />
      <form>
        <div className="flex gap-10 mt-6 ml-6">
          <div>
            <CheckDiv listId="skills" listTools="HTML/CSS/JS" />
            <CheckDiv listId="skill" listTools="AngularJs" />
          </div>
          <div>
            <CheckDiv listId="listSkill" listTools="ReactJS" />
            <CheckDiv listId="listSkills" listTools="Vue.js" />
          </div>
        </div>
        <button
          className="text-white w-[110px] ml-[460px] h-[41px] text-center mt-6  rounded-[10px] summit"
          type="submit"
        >
          Next Step
        </button>
      </form>
      <Link href="/two">
        <button className="w-[110px] rounded-[10px] mt-[-2.5rem] ml-[1rem] absolute text-center h-[41px] go-back">
          Go back
        </button>
      </Link>
    </div>
  );
}
