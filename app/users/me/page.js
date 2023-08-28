import { SignOutButton } from "@/components";
import supabase from "@/lib/supabase-server.config";
import { redirect } from "next/navigation";

export default async function Me(request) {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) redirect("/sign-in");

    
    return (
        <div className="w-full h-full flex flex-col gap-8 justify-center items-center">
            <p className="">{user?.email}</p>
            <SignOutButton />
        </div>
    )
}