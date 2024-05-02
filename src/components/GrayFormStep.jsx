export default function GrayFormStep({stageTwo}) {
  return (
    <div className="rounded-full w-[34px] h-[34px]
    relative bg-gray-300">
        <p className="text-black text-center absolute top-[.3rem] left-[.8rem] font-bold">{stageTwo}</p>
    </div>
  )
}
