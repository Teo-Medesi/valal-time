"use client"
import { useBranch } from "@/context/BranchContext"
import moment from "moment/moment";

const DateSelect = ({ className }) => {
  const { selectedDate, setSelectedDate } = useBranch();
  const formattedDate = selectedDate.calendar({ sameDay: "[Today], MMMM D", lastDay: "[Yesterday], MMMM D", nextDay: "[Tomorrow], MMMM D", sameElse: "dddd, MMMM D", lastWeek: "dddd, MMMM D", nextWeek: "dddd, MMMM D" });

  const handleNextDay = () => {
    setSelectedDate(current => current.clone().add(1, "day"));
  }

  const handlePreviousDay = () => {
    setSelectedDate(current => current.clone().subtract(1, "day"));
  }

  return (
    <div className={className + " flex w-full md:h-full items-center padding-x justify-between"}>
      <div onClick={handlePreviousDay} className="w-12 p-2 btn border-gray-400 btn-outline"><svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#ffffff" className="stroke-gray-400" stroke-width="2" stroke-linecap="round" vlsd stroke-linejoin="round"></path> </g></svg></div>
      <p className="text-xl text-gray-400">{formattedDate}</p>
      <div onClick={handleNextDay} className="w-12 p-2 btn border-gray-400 btn-outline"><svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffffff" className="stroke-gray-400" stroke-width="2" stroke-linecap="round" vlsd stroke-linejoin="round"></path> </g></svg></div>
    </div>
  )
}

export default DateSelect