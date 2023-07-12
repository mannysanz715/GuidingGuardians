const NavBar = () =>{
  return(
    <div className="flex justify-between my-8 mx-20 items-center">
      <h1 className="font-black text-3xl">GuidingGuardians</h1>
      <ul className="right-section-nav text-2xl flex items-center gap-12">
        <li className='about-button'>About</li>
        <li className='sign-in-button border-solid border-4  rounded p-2'>Sign-in</li>
      </ul>
    </div>
  )
}

export default NavBar