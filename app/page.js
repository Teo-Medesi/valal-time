import { ProjectSelectBox, Tasks, TasksTodo, Timer } from "@/components";

export default function Home() {

  return (
    <div className="flex md:justify-center w-full min-h-screen">
      <div className="w-full md:w-3/4 flex flex-col gap-16 items-center padding-y padding-x">
        <ProjectSelectBox />
        <Timer />
        <Tasks />
        <TasksTodo />
      </div>
    </div>
  )
}