import moment from "moment"

const TimeEntry = ({ entry }) => {
    const start = moment(entry.start_time);
    const end = moment(entry.end_time);

    return (
        <div className="flex justify-between btn btn-outline btn-secondary rounded-none">
            <p>{entry.task_id.name}</p>
            <div className="flex gap-4">
                <p>{start.format("HH:MM")}</p>
                <p> - </p>
                <p>{end.format("HH:MM")}</p>
            </div>
            <p>{start.diff(end, "HH:MM")}</p>
        </div>
    )
}

export default TimeEntry