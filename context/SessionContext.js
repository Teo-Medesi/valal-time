"use client"
import supabase from "@/lib/supabase-client.config";
import { createContext, useContext, useEffect, useState } from "react";

const SessionContext = createContext();

const SessionProvider = ({children}) => {
    const [session, setSession] = useState({});
    
    useEffect(() => {
        const unsubscribe = supabase.auth.onAuthStateChange((event, data) => {
            if (Object.keys(session).length === 0) setSession(data);
            if (process.env.NEXT_PUBLIC_DEVELOPMENT) console.log(`EVENT: ${event}, user: ${session?.user?.email}`);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    return <SessionContext.Provider value={session}>{children}</SessionContext.Provider>
}

export const useSession = () => useContext(SessionContext);

export default SessionProvider;