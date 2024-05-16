import Image from "next/image";
import congratImage from "@/components/images/Vector.svg";
export default function LastStage() {
  return (
    <div className="bg-white shadow-xl mt-5 p-5 rounded-2xl max-w-[640px] mx-auto h-[525px] mb-5">
      <div className="max-w-36 m-auto mt-28">
        <Image
          src={congratImage}
          width="150px"
          height="150px"
          alt="congrat image"
        />
      </div>
      <h1 className="text-center font-bold text-3xl">Congratulations!🎉🎉</h1>
      <p className="text-center text-gray-500 mt-4">
        Your profile has been created and you are now ready to start
        <br />
        participating in challenges that match your interests and coding
        <br />
        experience level.
      </p>
    </div>
  );
}
