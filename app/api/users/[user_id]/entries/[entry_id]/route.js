import { NextResponse } from "next/server";
import supabase from "@/lib/supabase-server.config";

export async function PATCH(request, { params }) {
  const body = await request.json();

  if (!body) return NextResponse.json({ error: "missing body" }, { status: 400 })

  const { data, error } = await supabase.from("task_entries").update(body).eq("id", params.entry_id);
  if (error) return NextResponse.json({ error: error?.message }, { status: 400 });

  return NextResponse.json({ message: "successfully updated task", data }, { status: 200 });
}

export async function DELETE(request, { params }) {
  const { data, error } = await supabase.from("task_entries").delete("*").eq("id", params.entry_id);
  if (error) return NextResponse.json({ error: error?.message }, { status: 400 });

  return NextResponse.json({ message: "successfully deleted task", data }, { status: 200 });
}