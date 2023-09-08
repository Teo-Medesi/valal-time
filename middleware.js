import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export default async function Middleware(request) {
    const response = NextResponse.next();
    
    if (request.nextUrl.pathname.startsWith("/dashboard")) {    

        const supabase = createMiddlewareClient({req: request, res: response}, {supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_KEY, supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL});
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return NextResponse.redirect(new URL("/", request.url));
    }

    return response;
}