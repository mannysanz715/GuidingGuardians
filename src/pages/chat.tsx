import { useRouter } from "next/router";
import { AxiosConfigOptions, HTTPMethods, RequestOptions, ResponseObj } from "@/types/externalApiCall";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import axios from "axios";
import NavBar from "@/components/NavBar/NavBar";
import SubBanner from "@/components/SubBanner/SubBanner";
import ChatHistoryBox from "@/components/ChatHistoryBox/ChatHistoryBox";
import ChatBox from "@/components/ChatBox/ChatBox";

export type OpenAIMessage = {
  role: string,
  content: string,
};

type OpenAIResponseChoice = {
  finish_reason: string,
  index: number,
  message: OpenAIMessage,
}

type OpenAIResponseT = {
  choices: OpenAIResponseChoice[],
  id: string,
  object: string,
  created: number,
  model: string,
  usage:{ 
      completion_tokens: number,
      prompt_tokens: number,
      total_tokens: number,
  },   
}

const Chat = () => {
  useEffect(()=>{
    const temp = [...msgHistory];
    apiCommunication()
  }, [])

  const router = useRouter()
  const { data } = router.query
  const stringData = data as string
  const [userInput, setUserInput] = useState(stringData)

  const initialMessage = {
    role: 'user',
    content: userInput,
  }

  //* STATE SETUP
  const [msgHistory, setMsgHistory] = useState([initialMessage])

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setUserInput(target.value);
  }

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    const temp = [...msgHistory];
    
    console.log("chat - handleSubmit",{temp})
  }

  const apiCommunication = async () => {
    const temp = [...msgHistory]
    console.log("chat userinput - apiCommunication",{userInput})
    const resp = await hydrate(userInput);
    if (resp) {
      temp.push(resp.choices[0].message);
    }
    setMsgHistory(temp);
    console.log("chat - apiCommunication",{temp})
    setUserInput('')
    return await new Promise<OpenAIResponseT>((resolve) => {
      resolve(resp)
    });
  }

  const hydrate = async (content: string) :Promise<OpenAIResponseT> => {
    const config: RequestOptions = {
        [AxiosConfigOptions.url]: "/api/openai_completion",
        [AxiosConfigOptions.method]: HTTPMethods.POST,
        [AxiosConfigOptions.data]: [{
                "role": "user",
                "content": content
        }]
    }
    const res = await axios<ResponseObj>(config);
    const {data, error} = res.data;
    // if(!error) {
        const resp = data as OpenAIResponseT;
        return await new Promise<OpenAIResponseT>((resolve) => {
            resolve(resp)
        });
    // } 
    // return null;
    
  }

  console.log(data)
  return ( 
    <div>
      <NavBar />
      <div className="border-t border-gray-400 mb-5"/>
      <div className="flex gap-10 ml-12 chat-box-height grow">
        <ChatHistoryBox />
        <ChatBox messages={msgHistory} />

      </div>
      
    </div>
  );
}

export default Chat;