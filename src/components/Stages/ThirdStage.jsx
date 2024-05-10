import CustomHr from "../CustomHr";
import FormStep from "../FormStep";
import FullRange from "../FullRange";
import GrayFormStep from "../GrayFormStep";
import HeadingPersonal from "../HeadingPersonal";
import Range from "../Range";

export default function ThirdStage() {
  return (
    <div className="bg-white mt-5 p-5 rounded-2xl max-w-[640px] mx-auto h-[525px]">
        <div className="flex items-center mt-[32px] max-w-[545px] mx-[auto] gap-4">
            <FormStep stage='1' />
            <FullRange />
            <FormStep stage='2' />
            <FullRange />
            <FormStep stage='3' />
            <Range />
            <GrayFormStep stageTwo='4' />
        </div>
        <CustomHr />
        <HeadingPersonal modalHeaderOne='Challenge Preference' modalParagraph='Please tell us which frontend challenges you would like to participate in' />
    </div>
  )
}
