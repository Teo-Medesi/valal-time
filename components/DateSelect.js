"use client"
import { useBranch } from "@/context/BranchContext"

const DateSelect = () => {
  const { selectedDate, setSelectedDate } = useBranch();

  return (
    <div className="flex w-full md:h-full items-center padding-x justify-between">
      <div className="w-12 p-2 btn btn-neutral btn-outline"><svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" vlsd stroke-linejoin="round"></path> </g></svg></div>
      <p>{new Date()}</p>
      <div className="w-12 p-2 btn btn-neutral btn-outline"><svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" vlsd stroke-linejoin="round"></path> </g></svg></div>
    </div>
  )
}

export default DateSelect