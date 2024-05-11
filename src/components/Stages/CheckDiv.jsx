import Checkbox from "../Auth/Checkbox";

export default function CheckDiv({listId, listTools}) {
  return (
    <div className="flex gap-10 mt-6 ">
      <div className="border  w-[254px] px-1 py-[0.2rem] h-[69px] flex gap-6 items-center rounded-[10px]  border-gray-400 cursor-pointer">
        <Checkbox 
          checkId={listId}
          tools={listTools}
        />
      </div>
    </div>
  );
}
