import CustomHr from "./CustomHr";
import FormStep from "./FormStep";
import FullRange from "./FullRange";
import GrayFormStep from "./GrayFormStep";
import Range from "./Range";

export default function ModalRegistration() {
  return (
    <>
        <div className="bg-white mt-5 p-5 rounded-2xl max-w-[640px] mx-auto h-[525px]">
        <div className="flex items-center mt-[32px] max-w-[545px] mx-[auto] gap-4">
        <FormStep 
          stage='1'
        />
        <Range />
       <GrayFormStep 
        stageTwo='2'
       />
        <Range />
        <GrayFormStep 
          stageTwo='3'
        />
        <Range />
        <GrayFormStep 
          stageTwo='4'
        />
        </div>
        <CustomHr />
        </div>
    </>
  )
}
