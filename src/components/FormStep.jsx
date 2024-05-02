export default function FormStep({stage}) {
  return (
    <div>
        <div className="w-[34px] h-[34px] relative containerOne rounded-full">
            <p className=" text-white text-center absolute top-[.3rem] left-[.8rem] font-bold">{stage}</p>
        </div>
    </div>
  )
}
