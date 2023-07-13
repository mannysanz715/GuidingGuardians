/* eslint-disable @next/next/no-img-element */
import { useState } from "react"

const InputBanner = () => {
const [hasText, setHasText] = useState(false)
  function onChange(e:any){
    if(e.target.value){
      setHasText(true)
    }
  }
  return (
    <div className="flex h-80 flex-col justify-center gap-10 items-center background-color">
      <h1 className="font-bold text-5xl text-white">Ask Anything!</h1>
      <div className="input-container-width flex items-center justify-between pl-5 border rounded-3xl bg-white input-container">
        <img src="/assets/searchIcon.png" alt="" className="h-5 w-5" />
        <input autoCorrect="off" onChange={onChange} autoComplete="off" type="text" className="input-width focus:outline-none h-9 px-3 rounded-2xl"/>
        <button className="m-0"> <img className=" m-0 rounded-r-3xl " src={hasText ? "/assets/submitArrow.jpg" : "/assets/greySubmit.jpg"} alt="" /></button>
      </div>
    </div>
)
}

export default InputBanner