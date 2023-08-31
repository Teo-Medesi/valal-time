"use client"
import { createContext, useContext, useEffect, useState } from "react";

const BranchContext = createContext();

const BranchProvider = ({children}) => {
    const [branch, setBranch] = useState({});
    const [project, setProject] = useState({});
    const [task, setTask] = useState({});
    const [todos, setTodos] = useState([])
    
    return <BranchContext.Provider value={{branch, project, task, todos, setBranch, setProject, setTask, setTodos}}>{children}</BranchContext.Provider>
}

export const useBranch = () => useContext(BranchContext);

export default BranchProvider;