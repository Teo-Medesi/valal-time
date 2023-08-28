"use client"
import { useSession } from "@/context/SessionContext"
import { revalidatePath } from "@/services";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
    const { signOut } = useSession();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        revalidatePath("/");

        router.push("/");
    }
    
    return <button onClick={handleSignOut} className="btn btn-error">Sign Out</button>
}

export default SignOutButton