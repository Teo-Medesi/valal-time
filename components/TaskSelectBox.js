"use client"
import { useBranch } from "@/context/BranchContext";
import { useRef, useState } from "react";
import Task from "./Task";

const TaskSelectBox = ({ }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { selectedProject, tasks, selectedTask, revalidate } = useBranch();

    const { session: { user } } = useSession();

    const [newTaskName, setNewTaskName] = useState("");
    const [newTaskDescription, setNewTaskDescription] = useState("");

    const inputRef = useRef();

    const createNewTask = async () => {
        if (!user?.id && !newTaskName) return;

        const response = await fetch(`/api/users/${user?.id}/branches/${selectedBranch.id}/projects/${selectedProject.id}/tasks`, {
            method: "POST",
            body: JSON.stringify({ name: newTaskName, description: newTaskDescription }),
        });

        if (response.ok) {
            await revalidate("tasks");

            inputRef.current.value = "";
            setIsSuccessAlertOpen(true);

            setTimeout(() => {
                setIsSuccessAlertOpen(false);
            }, 4000)
        }
    }

    return (
        <div className={`collapse collapse-arrow border-primary border btn-outline btn-primary w-full ${isOpen && "bg-primary-focus !text-black"}`}>
            <input type="checkbox" onClick={() => setIsOpen(current => !current)} />
            <div className="collapse-title">Tasks</div>
            <div className="collapse-content flex flex-col gap-4">
                {
                    selectedProject?.id
                        ?
                        <>
                            <div className="flex w-full">
                                <input ref={inputRef} onChange={event => setNewTaskName(event.target.value)} type="text" placeholder="create new task..." className="input focus-none text-white w-full input-bordered rounded-l-full" />
                                <div onClick={createNewTask} tabIndex={0} className="btn p-4 rounded-r-full btn-primary rounded-none border-none"><svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#161212"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#161212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
                            </div>
                            {
                                tasks?.length === 0
                                    ?
                                    <p>No tasks created yet!</p>
                                    :
                                    <>
                                        {tasks?.map(element => <Task key={element?.id} isSelected={(selectedTask?.id === element?.id)} task={element} />)}
                                    </>
                            }
                        </>
                        :
                        <div className="flex w-full py-4 justify-center items-center">
                            <h1 className="text-xl">No project selected!</h1>
                        </div>
                }
            </div>
        </div>
    )
}

export default TaskSelectBox