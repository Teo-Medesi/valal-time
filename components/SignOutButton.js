"use client"
import { useSession } from "@/context/SessionContext"
import { revalidatePath } from "@/services";

const SignOutButton = () => {
    const { signOut } = useSession();

    const handleSignOut = async () => {
        await signOut();
        revalidatePath("/");
    }
    
    return <button onClick={handleSignOut} className="btn btn-error">Sign Out</button>
}

export default SignOutButton