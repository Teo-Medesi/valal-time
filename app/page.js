import { BranchSelectBox, ProjectSelectBox, Tasks, TasksTodo, Timer } from "@/components";

export default function Home() {

  return (
    <div className="flex md:justify-center w-full min-h-screen">
      <div className="w-full md:w-3/4 flex flex-col gap-16 items-center padding-y padding-x">
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between w-full">
          <BranchSelectBox />
          <ProjectSelectBox />
        </div>
        <Timer />
        <Tasks />
        <TasksTodo />
      </div>
    </div>
  )
}