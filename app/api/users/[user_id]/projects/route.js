import supabase from "@/lib/supabase-server.config";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const {data, error} = await supabase.from("projects").select("*").eq("user_id", params.user_id);
    if (error) return NextResponse.json({error: error?.message}, {status: error?.code});

    return NextResponse.json({message: "successfully retrieved projects", data}, {status: 200});
    
}

export async function POST(request, { params }) {
    const body = await request.json();

    if (!body) return NextResponse.json({error: "missing body"}, {status: 400})

    const {data, error} = await supabase.from("projects").insert({name: body.name, user_id: params.user_id});
    if (error) return NextResponse.json({error: error?.message}, {status: 400});

    return NextResponse.json({message: "successfully created new project"}, {status: 201});
}