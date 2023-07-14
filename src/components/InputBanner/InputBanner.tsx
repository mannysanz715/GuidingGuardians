/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { use, useState } from "react"

const InputBanner = () => {
  const [hasText, setHasText] = useState(false)

  const [inputString, setInputString] = useState('')

  function onChange(e:any){
    setInputString(e.target.value)
    if(e.target.value){
      setHasText(true)
    }
    else setHasText(false)
  }



  return (
    <div className="flex w-screen h-64 flex-col justify-center gap-10 items-center background-color">
      <h1 className="font-bold text-5xl text-white">Ask Anything!</h1>
      <form onSubmit={(e) => e.preventDefault()} className="input-container-width flex items-center justify-between pl-5 border rounded-3xl bg-white input-container">
        <img src="/assets/searchIcon.png" alt="" className="h-5 w-5" />
        <input autoCorrect="off" onChange={onChange} autoComplete="off" type="text" className="input-width focus:outline-none h-9 px-3 rounded-2xl"/>
        
        <Link href={{
          pathname: '/chat',
          query: {
          data :inputString
          }
        }}> <img className=" m-0 rounded-r-3xl " src={hasText ? "/assets/submitArrow.jpg" : "/assets/greySubmit.jpg"} alt="" /></Link>
      </form>
    </div>
)
}

export default InputBanner