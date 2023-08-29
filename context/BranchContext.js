"use client"
import { createContext, useContext, useEffect, useState } from "react";

const BranchContext = createContext();

const BranchProvider = ({children}) => {
    const [branch, setBranch] = useState({branch: "main"});

    return <BranchProvider.Provider value={branch}>{children}</BranchProvider.Provider>
}

export const useBranch = () => useContext(BranchContext);

export default BranchProvider;