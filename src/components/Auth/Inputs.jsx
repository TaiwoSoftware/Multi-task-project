export default function Inputs({labelFor, labelText, type, value, handleChange, innerText}) {
  return (
    // 1. DRY
    // 2.Check if the input field is filled Up
    <>
        <label className="w-[71px] h-[21px] font-medium text-sm" htmlFor={labelFor}>{labelText}</label>
        <input type={type} title="fill the necessary details" value={value} onChange={handleChange} className="  border w-[254px] p-4 outline-orange-800 rounded-[10px] h-[40px] mt-2 border-gray-600 block" required id={labelFor} placeholder={innerText}/>
    </>
  )
}
