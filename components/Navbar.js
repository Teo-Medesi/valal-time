import supabase from "@/lib/supabase-server.config"
import Link from "next/link"

const Navbar = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  
  return (
    <div className="navbar padding-x justify-between">
        <button className="btn btn-square p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-full h-full stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button>
        {
          user?.user_metadata?.picture 
            ?
              <Link><img className="" src={user?.user_metadata?.picture} /></Link>
            : user 
                ?
                <Link role="button" href="/user" className="btn btn-square btn-primary p-3"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#000000" className="stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></Link>
              :
              <Link role="button" href="/sign-up" className="btn btn-square btn-primary p-3"><svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 18L17 18M17 18L14 18M17 18V15M17 18V21M11 21H4C4 17.134 7.13401 14 11 14C11.695 14 12.3663 14.1013 13 14.2899M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="#000000" className="stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></Link>
        }
    </div>
  )
}

export default Navbar