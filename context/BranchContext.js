"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "./SessionContext";

const BranchContext = createContext();

const BranchProvider = ({ children }) => {
    const { session: { user } } = useSession();

    const [branches, setBranches] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState({});

    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState({})

    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState({});

    const [todos, setTodos] = useState([])

    const [timeEntriesByDay, setTimeEntriesByDay] = useState([]);
    const [currentTimeEntry, setCurrentTimeEntry] = useState({});

    const [selectedDate, setSelectedDate] = useState("");

    // branches will be fetched on the initial render, while projects, tasks... will be fetched on demand -- that is when their parent element is selected
    useEffect(() => {
        if (user?.id && branches?.length === 0) getBranches();
    }, [user, branches])

    useEffect(() => {
        if (selectedBranch?.id) {
            if (localStorage) localStorage.setItem("lastSelectedBranch", JSON.stringify(selectedBranch));

            setSelectedProject({});
            setSelectedTask({});

            getProjects();
        }
    }, [selectedBranch])

    useEffect(() => {
        if (selectedProject?.id) {
            if (localStorage) localStorage.setItem("lastSelectedProject", JSON.stringify(selectedProject));

            setSelectedTask({});
            getTasks();
        }
    }, [selectedProject])

    useEffect(() => {
        if (selectedTask?.id) {
            if (localStorage) localStorage.setItem("lastSelectedTask", JSON.stringify(selectedTask));

            getTodos();
        }
    }, [selectedTask])

    useEffect(() => {
        if (currentTimeEntry?.end_time) saveCurrentTimeEntry();
    }, [currentTimeEntry])


    const getLastSelectedBranch = () => {
        if (localStorage) return JSON.parse(localStorage.getItem("lastSelectedBranch"));

        return null;
    }

    const getLastSelectedProject = () => {
        if (localStorage) {
            const project = JSON.parse(localStorage.getItem("lastSelectedProject"));
            if (project?.branch_id === selectedBranch?.id) return project
        }
        return null;
    }


    const getLastSelectedTask = () => {
        if (localStorage) {
            const task = JSON.parse(localStorage.getItem("lastSelectedTask"));
            if (task?.project_id === selectedProject?.id) return task;
        }

        return null;
    }

    const getBranches = async () => {
        const response = await fetch(`/api/users/${user.id}/branches`);
        const { data } = await response.json();

        const main = data.find(element => element?.name === "Main");

        setBranches(data || []);
        const lastSelectedBranch = getLastSelectedBranch();

        setSelectedBranch(lastSelectedBranch || main);
    }

    const getProjects = async () => {
        const response = await fetch(`/api/users/${user.id}/branches/${selectedBranch.id}/projects`);
        const { data } = await response.json();

        setProjects(data || []);

        const lastSelectedProject = getLastSelectedProject();
        if (lastSelectedProject) setSelectedProject(lastSelectedProject)

        setSelectedTask({});
    }

    const getTasks = async () => {
        const response = await fetch(`/api/users/${user.id}/branches/${selectedBranch.id}/projects/${selectedProject.id}/tasks`);
        const { data } = await response.json();

        setTasks(data || []);

        const lastSelectedTask = getLastSelectedTask();
        if (lastSelectedTask) setSelectedTask(lastSelectedTask)
    }

    const getTodos = async () => {
        const response = await fetch(`/api/users/${user.id}/branches/${selectedBranch.id}/projects/${selectedProject.id}/tasks/${selectedTask.id}/todos`);
        const { data } = await response.json();

        setTodos(data || []);
    }

    const saveCurrentTimeEntry = async () => {
        const response = await fetch(`/api/users/${user.id}/branches/${selectedBranch.id}/projects/${selectedProject.id}/tasks/${selectedTask.id}/entries`, {
            method: "POST",
            body: JSON.stringify(currentTimeEntry)
        });

        console.log(response)
    }

    // refresh local state on demand (fetch new data / revalidate data)
    const revalidate = async (state) => {
        switch (state) {
            case "branches":
                await getBranches();
                break;

            case "projects":
                await getProjects();
                break;

            case "tasks":
                await getTasks();
                break;

            case "todos":
                await getTodos();
                break;

            default:
                break;
        }
    }

    const values = {
        branches,
        setBranches,
        selectedBranch,
        setSelectedBranch,
        projects,
        setProjects,
        selectedProject,
        setSelectedProject,
        tasks,
        setTasks,
        selectedTask,
        setSelectedTask,
        todos,
        setTodos,
        timeEntriesByDay,
        currentTimeEntry,
        setCurrentTimeEntry,
        saveCurrentTimeEntry,
        selectedDate,
        setSelectedDate,
        revalidate
    }

    return <BranchContext.Provider value={values}>{children}</BranchContext.Provider>
}

export const useBranch = () => useContext(BranchContext);

export default BranchProvider;