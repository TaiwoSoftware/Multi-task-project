export default function EmptyErrorInput({message}) {
  return (
    <div className=" emptyInputError relative font-semibold">
        <p className='absolute top-[9.5rem] text-sm  left-[65%]'>{message}</p>
    </div>
  )
}
