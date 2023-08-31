import { useBranch } from '@/context/BranchContext';
import { useSession } from '@/context/SessionContext';
import React from 'react'

const Task = ({ task, isSelected }) => {
  const { setSelectedTask, selectedBranch, selectedProject } = useBranch();

  const handleClick = () => {
    setSelectedTask(task)
  }

  return (
    <div onClick={handleClick} className={`btn btn-primary !text-black flex justify-between ${isSelected ? "btn-primary" : "btn-outline"}`}>
      <p>{task?.name}</p>
      <p>{task?.description}</p>
      <p>{task?.total_time_tracked || "0h 0m"}</p>
    </div>
  )
}

export default Task