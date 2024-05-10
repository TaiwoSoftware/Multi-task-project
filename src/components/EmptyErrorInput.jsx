export default function EmptyErrorInput({message}) {
  return (
    <div className="relative font-semibold">
        <p className='absolute text-red-600 top-[9.5rem] text-sm  left-[65%]'>{message}</p>
    </div>
  )
}
