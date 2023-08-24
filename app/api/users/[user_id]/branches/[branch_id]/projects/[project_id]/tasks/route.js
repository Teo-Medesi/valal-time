import supabase from "@/lib/supabase-server.config";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const {data, error} = await supabase.from("tasks").select("*").eq("project_id", params.project_id);
    if (error) return NextResponse.json({error: error?.message}, {status: 400});

    return NextResponse.json({message: "successfully retrieved tasks", data}, {status: 200});
    
}

export async function POST(request, { params }) {
    const body = await request.json();

    if (!body) return NextResponse.json({error: "missing body"}, {status: 400})

    const {data, error} = await supabase.from("tasks").insert({name: body.name, project_id: params.project_id, description: body?.description, is_billable: body?.is_billable || false});
    if (error) return NextResponse.json({error: error?.message}, {status: 400});

    return NextResponse.json({message: "successfully created new task"}, {status: 201});
}