"use client";

import { useBranch } from "@/context/BranchContext";
import { useSession } from "@/context/SessionContext";
import { useState } from "react";

const Todo = ({ todo }) => {
  const [isArchived, setIsArchived] = useState(false);
  
  const { session: { user }} = useSession();
  const { selectedBranch, selectedProject, selectedTask} = useBranch();

  const handleClick = async () => {
    setIsArchived(true);

    await fetch(`/api/users/${user?.id}/branches/${selectedBranch.id}/projects/${selectedProject.id}/tasks/${selectedTask.id}/todos/${todo.id}`, {
      method: "PATCH",
      body: JSON.stringify({is_complete: true})
    })
  }
  
  return (
    <div onClick={handleClick} className="flex justify-between items-center py-2 pr-2 w-full">
      <p className={`input focus-none text-neutral-400 bg-transparent w-full flex items-center transition duration-300 ${(isArchived || todo.is_complete)  && "line-through"}`}>{todo?.name}</p>
      <input onClick={handleClick} checked={todo.is_complete} type="checkbox" className="checkbox checkbox-primary cursor-pointer checkbox-md" />
    </div>
  )
}

export default Todo