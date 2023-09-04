"use client";
import { useBranch } from "@/context/BranchContext";
import TimeEntry from "./TimeEntry";
import ActiveTimeEntry from "./ActiveTimeEntry";

const TimeEntries = () => {
  const { timeEntries, currentTimeEntry, isTimerRunning } = useBranch();

  return (
    <div className={`flex flex-col w-full gap-4 ${timeEntries?.length === 0 && "hidden"}`}>
      {isTimerRunning && <ActiveTimeEntry entry={currentTimeEntry} />}
      {timeEntries?.map(element => <TimeEntry entry={element} />)}
    </div>
  )
}

export default TimeEntries