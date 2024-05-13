export default function GrayishBackground({title, titleName}) {
    
  return (
    <div className="bg-gray-100 rounded-md px-4 py-4 mt-5">
        <p className="text-slate-500 text-sm">{title}</p>
        <p className="text-black text-xs font-semibold">{titleName}</p>
    </div>
  )
}
