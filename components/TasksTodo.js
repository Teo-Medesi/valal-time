"use client";
import { useBranch } from "@/context/BranchContext"
import NewTodo from "./NewTodo";
import Todo from "./Todo";

const TasksTodo = ({ }) => {
  const { todos, archivedTodos } = useBranch();

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between text-neutral-content">
        <h1>Todo</h1>
        <h1>Current Task</h1>
      </div>
      <div className="divider"></div>
      <div>
        {todos?.map(element => <Todo todo={element} key={element?.id} />)}
        {archivedTodos?.map(element => <Todo todo={element} key={element?.id} />)}
        <NewTodo />
      </div>
    </div>
  )
}

export default TasksTodo