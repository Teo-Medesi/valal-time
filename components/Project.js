import { useBranch } from '@/context/BranchContext';
import React from 'react'

const Project = ({ project, isSelected }) => {
  const { setSelectedProject } = useBranch();

  const handleClick = () => {
    setSelectedProject(project)
  }

  return (
    <div onClick={handleClick} className={`btn flex justify-between ${!isSelected && "btn-outline !text-black"}`}>
      <p>{project?.name}</p>
      <p>{project?.description}</p>
      <p>{project?.total_time_tracked || "0h 0m"}</p>
    </div>
  )
}

export default Project