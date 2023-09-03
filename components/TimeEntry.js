import moment from "moment"

const TimeEntry = ({ entry }) => {
    const start = moment(entry.start_time);
    const end = moment(entry.end_time);

    return (
        <div className="flex justify-between shadow-secondary shadow btn btn-ghost  rounded">
            <div className="flex gap-4 items-center">
                <span className="rounded-full bg-secondary w-2 h-2"></span>
                <p>{entry.task_id.name}</p>
            </div>
            <div className="flex gap-12">
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