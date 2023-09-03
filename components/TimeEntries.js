"use client";
import { useBranch } from "@/context/BranchContext";
import TimeEntry from "./TimeEntry";

const TimeEntries = () => {
    const { timeEntries, currentTimeEntry } = useBranch();
    
  return (
    <div className="flex flex-col w-full">
        {timeEntries?.map(element => <TimeEntry entry={element} />)}        
    </div>
  )
}

export default TimeEntries