import Image from "next/image"
export default function RadioDiv({altText, srcImage, level}) {
  return (
    <div className="border w-[254px] px-1 py-[0.2rem] h-[69px] flex gap-6 items-center rounded-[10px]  border-gray-600">
        <div className="imageBackground  w-[34px] h-[34px]  left-[10px] rounded-full relative">
          <Image 
            alt={altText}
            src={srcImage}
            className="absolute top-[.5rem] left-[0.4rem]"
          />
        </div>
        <p className="font-medium text-sm text-center">{level}</p>
    </div>
  )
}

