import { useBranch } from '@/context/BranchContext';
import React from 'react'

const Project = ({project, isSelected}) => {  
  const { setProject } = useBranch();

  const handleClick = () => {
    setProject(project)
  }
  
  return (
    <div onClick={handleClick} className={`btn btn-primary !text-black flex justify-between ${isSelected ? "btn-primary" : "btn-outline"}`}>
      <p>{project?.name}</p>
      <p>{project?.description}</p>
      <p>{project?.total_time_tracked || "0h 0m"}</p>
    </div>
  )
}

export default Project