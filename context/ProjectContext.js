"use client"
import { createContext, useContext, useEffect, useState } from "react";

const ProjectContext = createContext();

const ProjectProvider = ({children}) => {
    const [project, setProject] = useState({});

    return <ProjectProvider.Provider value={project}>{children}</ProjectProvider.Provider>
}

export const useProject = () => useContext(ProjectContext);

export default ProjectProvider;