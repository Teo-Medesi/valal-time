import { NextResponse } from "next/server";
import supabase from "@/lib/supabase-server.config";

export async function GET(request, { params }) {
    const { data, error } = await supabase.from("task_entries").select("*").eq("user_id", params.user_id);
    if (error) return NextResponse.json({ error: error?.message }, { status: 400 });
  
    return NextResponse.json({ message: "successfully retrieved task entries", data }, { status: 200 });
}