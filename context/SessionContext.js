"use client"
import supabase from "@/lib/supabase-client.config";
import { createContext, useContext, useEffect, useState } from "react";

const SessionContext = createContext();

const SessionProvider = ({children}) => {
    const [session, setSession] = useState({signOut: () => supabase.auth.signOut({scope: "global"})});
    
    useEffect(() => {
        const { data} = supabase.auth.onAuthStateChange((event, data) => {
            setSession(current => { return {...current, session: data}});
            
            if (process.env.NEXT_PUBLIC_DEVELOPMENT) console.log(`EVENT: ${event}, user: ${data?.user?.email}`);
        })

        return () => {
            // remove auth listener
            data.subscription.unsubscribe();
        }
    }, [])

    return <SessionContext.Provider value={session}>{children}</SessionContext.Provider>
}

export const useSession = () => useContext(SessionContext);

export default SessionProvider;