/* eslint-disable @next/next/no-img-element */
import Link from "next/link"


const NavBar = () =>{
  return(
    <div className=" flex justify-between my-6 mx-12 items-center">
      <img src="/assets/logo.png" alt="GuidingGuardians"/>
      <ul className="right-section-nav text-2xl flex items-center gap-7">
        <Link href='/about'><li className='hover:bg-slate-100 hover:text-slate-500 hover:rounded focus: p-3 about-button'>About</li></Link>
        <Link href="#"><li className='hover:bg-slate-100 hover:rounded hover:text-slate-100 sign-in-button border-solid border-2  rounded-3xl p-3'>Sign-in</li></Link>
      </ul>
    </div>
  )
}

export default NavBar