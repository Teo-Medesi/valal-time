import supabase from "@/lib/supabase-server.config";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { data, error } = await supabase.from("task_entries").select("*").eq("task_id", params.task_id);
  if (error) return NextResponse.json({ error: error?.message }, { status: 400 });

  return NextResponse.json({ message: "successfully retrieved task entries", data }, { status: 200 });

}

export async function POST(request, { params }) {
  const body = await request.json();

  if (!body) return NextResponse.json({ error: "missing body" }, { status: 400 })

  const { data, error } = await supabase.from("task_entries").insert({ start_time: body?.start_time, end_time: body?.end_time, task_id: params.task_id });
  if (error) return NextResponse.json({ error: error?.message }, { status: 400 });

  return NextResponse.json({ message: "successfully created new task entry" }, { status: 201 });
}