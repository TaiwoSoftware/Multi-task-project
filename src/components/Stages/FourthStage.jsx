import CustomHr from "../CustomHr";
import FormStep from "../FormStep";
import FullRange from "../FullRange";
import HeadingPersonal from "../HeadingPersonal";

export default function FourthStage() {
  return (
    <div className="bg-white mt-5 p-5 rounded-2xl max-w-[640px] mx-auto h-[525px]">
        <div className="flex items-center mt-[32px] max-w-[545px] mx-[auto] gap-4">
            <FormStep stage='1' />
            <FullRange />
            <FormStep stage='2' />
            <FullRange />
            <FormStep stage='3' />
            <FullRange />
            <FormStep stage='4' />
        </div>
        <CustomHr />
        <HeadingPersonal 
            modalHeaderOne='Review and Confirm'
            modalParagraph='Please review your information to make sure everything is accurate.'
        />
    </div>
  )
}
