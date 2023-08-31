import { BranchSelectBox, ProjectSelectBox, TaskSelectBox, TasksTodo, Timer } from "@/components";
import supabase from "@/lib/supabase-server.config";
import { getBranches } from "@/services";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="flex md:justify-center w-full min-h-screen">
      <div className="w-full md:w-3/4 flex flex-col gap-16 items-center padding-y padding-x">
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between w-full">
          <BranchSelectBox />
          <ProjectSelectBox />
        </div>
        <Timer />
        <TaskSelectBox />
        <TasksTodo />
      </div>
    </div>
  )
}