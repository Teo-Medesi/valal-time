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

    useEffect(() => {
        if (user?.id && branches?.length === 0) getBranches();
    }, [user, branches])

    useEffect(() => {
        if (selectedBranch?.id) getProjects();
    }, [selectedBranch])

    useEffect(() => {
        if (selectedProject?.id) getTasks();
    }, [selectedProject])

    useEffect(() => {
        if (selectedTask?.id) getTodos();
    }, [selectedTask])


    const getBranches = async () => {
        console.log("getting branches")

        const response = await fetch(`/api/users/${user.id}/branches`);
        const { data } = await response.json();

        const main = data.find(element => element?.name === "Main");

        setBranches(data || []);
        setSelectedBranch(main);
    }

    const getProjects = async () => {
        console.log("getting projects")

        const response = await fetch(`/api/users/${user.id}/branches/${selectedBranch.id}/projects`);
        const { data } = await response.json();

        setProjects(data || []);
    }

    const getTasks = async () => {
        console.log("getting tasks")

        const response = await fetch(`/api/users/${user.id}/branches/${selectedBranch.id}/projects/${selectedProject.id}/tasks`);
        const { data } = await response.json();

        setTasks(data || []);
    }

    const getTodos = async () => {
        console.log("getting todos")

        const response = await fetch(`/api/users/${user.id}/branches/${selectedBranch.id}/projects/${selectedProject.id}/tasks/${selectedTask.id}/todos`);
        const { data } = await response.json();

        setTodos(data || []);
    }

    // refresh local state (fetch new data / revalidate data)
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
        revalidate
    }

    return <BranchContext.Provider value={values}>{children}</BranchContext.Provider>
}

export const useBranch = () => useContext(BranchContext);

export default BranchProvider;