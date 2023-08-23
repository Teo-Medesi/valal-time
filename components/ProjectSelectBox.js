"use client"
import { useState } from "react"

const ProjectSelectBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
      <div className={`collapse collapse-arrow md:w-3/4 border-primary border btn-outline btn-primary w-full ${isOpen && "bg-primary-focus !text-black"}`}>
        <input type="checkbox" onClick={() => setIsOpen(current => !current)} />
        <div className="collapse-title">Project</div>
        <div className="collapse-content flex flex-col gap-4">
          <div className="flex w-full">
            <input type="text" placeholder="create new project..." className="input focus-none text-white w-full input-bordered rounded-l-full" />
            <div className="btn p-4 rounded-r-full btn-secondary rounded-none border-none"><svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#161212"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#161212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
          </div>
          <p>No projects created yet!</p>
        </div>
      </div>
  )
}

export default ProjectSelectBox