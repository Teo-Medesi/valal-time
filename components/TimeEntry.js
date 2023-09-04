"use client";
import { useBranch } from "@/context/BranchContext";
import { useSession } from "@/context/SessionContext";
import moment from "moment"
import { useState } from "react";

const TimeEntry = ({ entry }) => {
    const [isHover, setIsHover] = useState(false);

    const { session: { user } } = useSession();
    const { revalidate, setTimeEntries } = useBranch();

    const start = moment(entry.start_time);
    const end = moment(entry.end_time);

    const handleDelete = async () => {
        setTimeEntries(current => current.filter(element => element?.id !== entry.id))
        const response = await fetch(`/api/users/${user.id}/entries/${entry.id}`, {
            method: "DELETE"
        })

        revalidate("entries")
    }

    return (
        <div onMouseOver={event => !isHover && setIsHover(true)} onMouseLeave={event => setIsHover(false)} className="flex justify-between shadow-secondary shadow btn btn-ghost rounded">
            <div className="flex gap-4 items-center">
                <span className="rounded-full bg-secondary w-2 h-2"></span>
                <p>{entry.task_id.name}</p>
            </div>
            <div className="flex items-center gap-12">
                <div onClick={handleDelete} className={`btn btn-ghost rounded p-2 ${!isHover && "hidden"}`}><svg className="w-full h-full stroke-gray-400" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M45.49,54.87h-27a1,1,0,0,1-1-1l-2-36H48.46l-2,36A1,1,0,0,1,45.49,54.87Z"></path><path d="M51,17.86H13c-.28,0-.5-.16-.5-.35l.93-4.35a.49.49,0,0,1,.5-.3H50.07a.49.49,0,0,1,.5.3l.93,4.35C51.5,17.7,51.28,17.86,51,17.86Z"></path><line x1="24" y1="23.44" x2="24" y2="48.44"></line><line x1="32" y1="23.44" x2="32" y2="48.44"></line><line x1="40" y1="23.44" x2="40" y2="48.44"></line><path d="M25.73,12.86V7.57a1,1,0,0,1,1-1H37.27a1,1,0,0,1,1,1v5.29"></path></g></svg></div>
                <div className="flex gap-4">
                    <p>{start.format("HH:MM")}</p>
                    <p> - </p>
                    <p>{end.format("HH:MM")}</p>
                </div>
                <p>{end.diff(start, "hours")}h</p>
            </div>
        </div>
    )
}

export default TimeEntry