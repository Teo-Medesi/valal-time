import supabase from "@/lib/supabase-server.config";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const {data, error} = await supabase.from("projects").select("*").eq("branch_id", params.branch_id);
    if (error) return NextResponse.json({error: error?.message}, {status: 400});

    return NextResponse.json({message: "successfully retrieved projects", data}, {status: 200});
    
}

export async function POST(request, { params }) {
    const body = await request.json();

    if (!body) return NextResponse.json({error: "missing body"}, {status: 400})

    const {data, error} = await supabase.from("projects").insert({name: body?.name, description: body?.description, branch_id: params.branch_id});
    if (error) return NextResponse.json({error: error?.message}, {status: 400});

    return NextResponse.json({message: "successfully created new project"}, {status: 201});
}