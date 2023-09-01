
const Todo = ({ todo }) => {
  return (
    <div className="flex justify-between items-center py-2 pr-2 w-full">
      <p className="input focus-none text-neutral-400 bg-transparent w-full flex items-center">{todo?.name}</p>
      <input type="checkbox" className="checkbox checkbox-primary cursor-pointer checkbox-md" />
    </div>
  )
}

export default Todo