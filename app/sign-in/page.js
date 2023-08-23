"use client"
import supabase from "@/lib/supabase-client.config";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignIn() {
    const router = useRouter();
    const [error, setError] = useState("")

    const handleSignInWithEmail = async (data) => {
        setError("");
        
        const email = data.get("email");
        const password = data.get("password");

       const { error } = await supabase.auth.signInWithPassword({
            email, 
            password
        }) 

        if (error) setError(error?.message);
        else router.push("/");
    }

    return (
        <form action={handleSignInWithEmail} className="w-full h-full padding-x padding-y md:flex md:justify-center">
            <section className="flex flex-col gap-16 md:w-3/4 xl:w-1/2">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="label">Email</label>
                        <input type="text" name="email" placeholder="johndoe@example.com" className="input input-bordered bg-transparent" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" name="password" placeholder="password123" className="input input-bordered bg-transparent" />
                        {error && <p className="text-error">{error}</p>}
                    </div>
                </div>
                <button type="submit" className="btn btn-secondary btn-outline w-full">Sign In</button>
                <div className="divider"></div>
                <Link href="/sign-up" className="hover:text-primary text-center p-4">Don't have an account? Sign up...</Link>
            </section>
        </form>
    )
}