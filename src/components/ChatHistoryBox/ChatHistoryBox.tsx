import { OpenAIMessage } from "@/pages/chat";
import Link from "next/link";

type propsType = {
  messages : OpenAIMessage[]
}


/* eslint-disable @next/next/no-img-element */
const ChatHistoryBox = ( {messages} : propsType ) => {
  return ( 
  <div className="background-color w-80 rounded-xl h-5/6 text-white">
    <Link href={{pathname: '/'}}>
      <h3 className="underline border-b h-24 gap-4 flex justify-center items-center text-xl border-b-2 border-sky-700">
      <img src="/assets/chatArrow.png" alt="arrow" />Ask a new question</h3>
    </Link>
    <div className="border-b border-b-1 border-cyan-700 pl-9 pt-6">
      <h2 className="font-bold text-4xl ">Chat History</h2>
    </div>
      {messages && messages.filter((message) => message.role == "user").map((item, idx) => {
        return(
            <p key={idx} className="mt-5 w-60 pl-9">Chat {idx + 1}: {item.content}</p>
          )
      })}
    {/* <p className="mt-5 w-60 pl-9">Chat 1: Factor the expression completely:</p> */}
  </div> );
}

export default ChatHistoryBox;

