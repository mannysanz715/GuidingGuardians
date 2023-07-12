import Link from "next/link"


const NavBar = () =>{
  return(
    <div className="flex justify-between my-8 mx-20 items-center">
      <h1 className="font-black text-3xl">GuidingGuardians</h1>
      <ul className="right-section-nav text-2xl flex items-center gap-12">
        <Link href='#'><li className='hover:bg-slate-100 hover:text-slate-500 hover:rounded focus: p-2 about-button'>About</li></Link>
        <Link href="#"><li className='hover:bg-slate-100 hover:rounded hover:text-slate-500 sign-in-button border-solid border-4  rounded p-2'>Sign-in</li></Link>
      </ul>
    </div>
  )
}

export default NavBar