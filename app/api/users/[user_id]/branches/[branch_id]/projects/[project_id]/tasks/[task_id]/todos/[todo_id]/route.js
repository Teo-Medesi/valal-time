import supabase from "@/lib/supabase-server.config";
import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
    const body = await request.json();
    
    if (!body) return NextResponse.json({ error: "missing body" }, { status: 400 })

    const { data, error} = await supabase.from("task_todos").update(body).eq("id", params.todo_id);
    if (error) return NextResponse.json({error: error?.message}, {status: 400});

    return NextResponse.json({message: "successfully updated todos", data}, {status: 200});
}

export async function DELETE(request, { params }) {
    const body = await request.json();
    
    if (!body) return NextResponse.json({ error: "missing body" }, { status: 400 })

    const { data, error} = await supabase.from("task_todos").delete().eq("id", params.todo_id)
    if (error) return NextResponse.json({error: error?.message}, {status: 400});

    return NextResponse.json({message: "successfully deleted todo", data}, {status: 200});
}