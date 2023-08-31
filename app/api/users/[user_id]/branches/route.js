import supabase from "@/lib/supabase-server.config";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const {data, error} = await supabase.from("branches").select("*").eq("user_id", params.user_id);
    if (error) return NextResponse.json({error: error?.message}, {status: 400});
    
    return NextResponse.json({message: "successfully retrieved branches", data}, {status: 200});
    
}

export async function POST(request, { params }) {
    const body = await request.json();

    if (!body) return NextResponse.json({error: "missing body"}, {status: 400})

    const {data, error} = await supabase.from("branches").insert({name: body?.name, description: body?.description, user_id: params.user_id});
    if (error) return NextResponse.json({error: error?.message}, {status: 400});

    return NextResponse.json({message: `successfully created new branch "${body?.name}"`}, {status: 201});
}