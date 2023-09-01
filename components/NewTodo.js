"use client"
import { useBranch } from "@/context/BranchContext"
import { useSession } from "@/context/SessionContext";
import { useRef, useState } from "react";

const NewTodo = () => {
  const { selectedTask, selectedBranch, selectedProject, revalidate } = useBranch();
  const { session: { user } } = useSession();
  const [newTodoName, setNewTodoName] = useState("");
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);

  const inputRef = useRef();

  const handleKeyDown = event => {
    if (event.key === "Enter") createNewTodo();
  }

  const createNewTodo = async () => {
    if (!newTodoName) return;
    console.log("new todo")

    const response = await fetch(`/api/users/${user?.id}/branches/${selectedBranch.id}/projects/${selectedProject?.id}/tasks/${selectedTask?.id}/todos`, {
      method: "POST",
      body: JSON.stringify({ name: newTodoName }),
    });

    if (response.ok) {
      await revalidate("todos");

      inputRef.current.value = "";
      setNewTodoName("");

      setIsSuccessAlertOpen(true);

      setTimeout(() => {
        setIsSuccessAlertOpen(false);
      }, 4000)
    }

  }


  return (
    <>
      <div className="flex justify-between items-center py-2 w-full">
        <input ref={inputRef} onChange={event => setNewTodoName(event.target.value)} onKeyDown={handleKeyDown} type="text" placeholder="create new to-do" className="input rounded-xl focus-none w-full" disabled={!selectedTask.id} />
      </div>
      <div className="absolute pointer-events-none w-screen h-screen left-0 bottom-0 flex justify-center items-end padding-y"><div class={`alert alert-success w-max h-max transition-all duration-1000 opacity-0 ${isSuccessAlertOpen && "opacity-100"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Your project has been successfully created!</span>
      </div></div>
    </>
  )
}

export default NewTodo