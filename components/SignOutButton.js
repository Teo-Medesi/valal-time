"use client"
import { useSession } from "@/context/SessionContext"

const SignOutButton = () => {
    const { signOut } = useSession();
    
    return <button onClick={signOut} className="btn btn-error">Sign Out</button>
}

export default SignOutButton