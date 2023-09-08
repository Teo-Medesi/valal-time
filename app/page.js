import Logo from "@/public/logo.svg"
import Image from "next/image"
import desktop from "@/public/mockups/desktop.png"
import phone from "@/public/mockups/mobile.png"
import supabase from "@/lib/supabase-server.config"
import Link from "next/link"

export default async function Home() {
  const { data: {user}} = await supabase.auth.getUser();

  return (
    <div className="flex absolute left-0 top-0 justify-center items-center w-full min-h-screen">
      <div className="flex hero px-2 md:px-0 md:w-2/3 lg:w-1/2 flex-col items-center w-full gap-20 text-center">
        <div className="flex justify-center md:justify-between w-full">
          <Image src={phone} alt="phone mockup" className="hidden md:block w-1/2 aspect-1/1" />
          <svg className="md:hidden animate-pulse" width="121" height="167" viewBox="0 0 121 167" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1.5H119M1.5 2L1.5 26M119.5 1V25M1 165.5H119M119.5 142V166M1.5 142L1.5 166M1.60302 25.3959L119.104 142.897M119.354 24.3536L62.3536 81.3536M1.64645 142.646L58.6464 85.6464" stroke="url(#paint0_linear_1_37)" stroke-width="2" />
            <defs>
              <linearGradient id="paint0_linear_1_37" x1="60.25" y1="1" x2="60.25" y2="166" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1DB853" />
                <stop offset="1" stop-color="#1DB990" stop-opacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
          <Image src={desktop} alt="desktop mockup" className="w-1/2 aspect-1/1 hidden md:block" />
        </div>

        <div className="flex flex-col w-full items-center gap-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl bg-gradient-to-r from-primary to-secondary text-gradient">{!user ? "Don't Waste Time" : `Welcome Back!`}</h1>
            <p className="text-neutral">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur pariatur explicabo omnis quam vel animi optio velit voluptates ex assumenda.</p>
          </div>

          <Link href={user ? "/dashboard" : "/sign-up"} className="animate-pulse btn btn-secondary bg-gradient-to-r from-secondary to-primary w-max">{!user ? "Start Tracking Time Now" : "Go To Dashboard"}</Link>

        </div>
      </div>
    </div>
  )
}