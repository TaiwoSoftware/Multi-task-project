export default function Checkbox({ checkId, tools }) {
  return (
    <div className="p-4 flex items-center">
      <input className=" rounded-lg w-4 h-4"  type="checkbox" id={checkId} />
      <label className="font-semibold ml-2 " htmlFor={checkId}>{tools}</label>
    </div>
  );
}
