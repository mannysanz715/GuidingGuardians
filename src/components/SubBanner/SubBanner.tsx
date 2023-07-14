import { useState } from "react"

/* eslint-disable @next/next/no-img-element */
type props = {
  title: string
  info : string
  page : string
}

const SubBanner = ({title, info, page} : props) => {
  const [isHome, setPage] = useState(false)

  return ( 
    <div className={`flex flex-col justify-center items-center mt-16 gap-7 w-screen`}>
      <h2 className="font-bold text-4xl">{title}</h2>
      <p className="text-base text-color  text-center text-width">{info}</p>
      <img className="mt-9" src="/assets/line.png" alt="line"/>
    </div>
  );
}

export default SubBanner;