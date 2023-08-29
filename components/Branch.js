"use client"
import { useBranch } from '@/context/BranchContext'
import React from 'react'

const Branch = ({branch, isSelected}) => {  
  const { setBranch } = useBranch();

  const handleClick = () => {
    setBranch(current => { return {...current, branch }})
  }
  
  return (
    <div onClick={handleClick} className={`btn btn-primary !text-black flex justify-between ${isSelected ? "btn-primary" : "btn-outline"}`}>
      <p>{branch?.name}</p>
      <p>{branch?.description}</p>
      <p>{branch?.total_time_tracked || "0h 0m"}</p>
    </div>
  )
}

export default Branch