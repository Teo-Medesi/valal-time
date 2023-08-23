
const TasksTodo = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between text-neutral-content">
        <h1>Todo</h1>
        <h1>Current Task</h1>
      </div>
      <div className="divider"></div>
      <div>
        <div className="flex justify-between items-center w-full">
          <input type="text" placeholder="create new to-do" className="input focus-none bg-transparent w-full" />
          <input type="checkbox" className="checkbox checkbox-primary cursor-pointer checkbox-md" />
        </div>
      </div>
    </div>
  )
}

export default TasksTodo