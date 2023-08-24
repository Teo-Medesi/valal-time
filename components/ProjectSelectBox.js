"use client"
import { useSession } from "@/context/SessionContext";
import { useRef, useState } from "react"

const ProjectSelectBox = ({projects}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessAlertOpen, setIsSuccessAlertOpen] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const inputRef = useRef();
  
  const { user } = useSession();

  const handleOpen = () => {
    if (!isOpen) inputRef.current.focus();
    setIsOpen(current => !current);
  }

  const createNewProject = async () => {
    setIsSuccessAlertOpen(true);
    setTimeout(() => {
      setIsSuccessAlertOpen(false);
    }, 4000)

    await fetch(`/api/users/${user?.id}/projects`, {
      method: "POST",
      body: JSON.stringify({name: newProjectName})
    })    
  } 

  return (
    <>
      <div className={`collapse collapse-arrow md:w-1/4 border-secondary border btn-outline btn-secondary w-full transition-all ${isOpen && "bg-secondary-focus !text-black md:!w-1/2"}`}>
        <input type="checkbox" onClick={handleOpen} />
        <div className="collapse-title">Project</div>
        <div className="collapse-content flex flex-col gap-4">
          <div className="flex w-full">
            <input onChange={event => setNewProjectName(event.target.value)} ref={inputRef} type="text" placeholder="search or create new project..." className="input focus-none text-white w-full input-bordered rounded-l-full" />
            <div onClick={createNewProject} className="btn p-4 rounded-r-full btn-secondary rounded-none border-none"><svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#161212"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#161212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
          </div>
          <p>No projects created yet!</p>
        </div>
      </div>
      <div className="absolute pointer-events-none w-screen h-screen left-0 bottom-0 flex justify-center items-end padding-y"><div class={`alert alert-success w-max h-max transition-all duration-1000 opacity-0 ${isSuccessAlertOpen && "opacity-100"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Your project has been successfully created!</span>
      </div></div>
    </>
  )
}

export default ProjectSelectBox