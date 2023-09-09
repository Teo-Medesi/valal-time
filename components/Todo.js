"use client";

import { useBranch } from "@/context/BranchContext";
import { useSession } from "@/context/SessionContext";
import { useState } from "react";

const Todo = ({ todo }) => {
  const [isArchived, setIsArchived] = useState(false);
  const [isHover, setIsHover] = useState(false);
  
  const { session: { user }} = useSession();
  const { selectedBranch, selectedProject, selectedTask, revalidate} = useBranch();

  const handleDelete = async () => {
    
  }

  const handleClick = async () => {
    setIsArchived(true);

    await fetch(`/api/users/${user?.id}/branches/${selectedBranch.id}/projects/${selectedProject.id}/tasks/${selectedTask.id}/todos/${todo.id}`, {
      method: "PATCH",
      body: JSON.stringify({is_complete: true})
    })

    revalidate("todos");
  }
  
  return (
    <div onMouseOver={event => !isHover && setIsHover(true)} onMouseLeave={event => setIsHover(false)} onClick={handleClick} className="cursor-pointer flex justify-between items-center py-2 pr-2 w-full">
      <p className={`input focus-none text-neutral-400 bg-transparent w-full flex items-center transition duration-300 ${(isArchived || todo.is_complete)  && "line-through"}`}>{todo?.name}</p>
      <div onClick={handleDelete} className={`btn btn-ghost mr-4 rounded p-2 ${!isHover && "hidden"}`}><svg className="w-full h-full stroke-gray-400" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M45.49,54.87h-27a1,1,0,0,1-1-1l-2-36H48.46l-2,36A1,1,0,0,1,45.49,54.87Z"></path><path d="M51,17.86H13c-.28,0-.5-.16-.5-.35l.93-4.35a.49.49,0,0,1,.5-.3H50.07a.49.49,0,0,1,.5.3l.93,4.35C51.5,17.7,51.28,17.86,51,17.86Z"></path><line x1="24" y1="23.44" x2="24" y2="48.44"></line><line x1="32" y1="23.44" x2="32" y2="48.44"></line><line x1="40" y1="23.44" x2="40" y2="48.44"></line><path d="M25.73,12.86V7.57a1,1,0,0,1,1-1H37.27a1,1,0,0,1,1,1v5.29"></path></g></svg></div>
      <input onClick={handleClick} checked={todo.is_complete || isArchived} type="checkbox" className="checkbox checkbox-primary cursor-pointer checkbox-md" />
    </div>
  )
}

export default Todo