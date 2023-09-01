import supabase from "@/lib/supabase-server.config";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { data, error } = await supabase.from("task_todos").select("*").eq("task_id", params.task_id);
    if (error) return NextResponse.json({ error: error?.message }, { status: 400 });

    return NextResponse.json({ message: "successfully retrieved task todos", data }, { status: 200 });

}

export async function POST(request, { params }) {
    const body = await request.json();

    if (!body) return NextResponse.json({ error: "missing body" }, { status: 400 })

    const { data, error } = await supabase.from("task_todos").insert({ name: body?.name, task_id: params.task_id });
    if (error) return NextResponse.json({ error: error?.message }, { status: 400 });

    return NextResponse.json({ message: "successfully created new task todo" }, { status: 201 });
}