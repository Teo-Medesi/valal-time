"use client"
import { useBranch } from '@/context/BranchContext'
import React from 'react'

const Branch = ({ branch, isSelected }) => {
  const { setSelectedBranch } = useBranch();

  const handleClick = () => {
    setSelectedBranch(branch);
  }

  return (
    <div onClick={handleClick} data-tip={branch?.description} className={`btn btn-primary !text-black flex justify-between ${isSelected ? "btn-primary" : "btn-outline"} ${branch?.description && "tooltip tooltip-top"}`}>
      <p>{branch?.name}</p>
      <p>{branch?.total_time_tracked || "0h 0m"}</p>
    </div>
  )
}

export default Branch