import { useRouter } from "next/router";
import { AxiosConfigOptions, HTTPMethods, RequestOptions, ResponseObj } from "@/types/externalApiCall";
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from "react";
import axios from "axios";
import NavBar from "@/components/NavBar/NavBar";
import SubBanner from "@/components/SubBanner/SubBanner";
import ChatHistoryBox from "@/components/ChatHistoryBox/ChatHistoryBox";
import ChatBox from "@/components/ChatBox/ChatBox";
import ChatBoxInput from "@/components/ChatBoxInput/ChatBoxInput";

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
  
  const router = useRouter()
  const { data } = router.query
  const stringData = data as string
  const [userInput, setUserInput] = useState(stringData)
  
  const initialMessages = [
    {
      role: "system",
      content: "you are a pleasant teacher talking to a 6th grade student."
    },
    {
      role: "system",
      content: "don't tell me the answer directly. If possible provide a step by step approach to find the solution."
    },
    {
      role: 'user',
      content: userInput,
    }
  ]
  //* STATE SETUP
  const [msgHistory, setMsgHistory] = useState(initialMessages)
  
  useEffect(()=>{
    apiCommunication(initialMessages)
  }, [])
  
  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setUserInput(target.value);
  }
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    apiCommunication([{role:"user", content: userInput}], true)
  }
  
  const apiCommunication = async (messages:OpenAIMessage[], shouldStore:boolean = false) => {
    const temp = [...msgHistory]
    if (shouldStore) {
      messages.map((message) => {return temp.push(message);})      
    }
    console.log("chat userinput - apiCommunication",{messages})
    const resp = await hydrate(temp);
    if (resp) {
      temp.push(resp.choices[0].message);
    }
    setMsgHistory(temp);
    console.log("chat - apiCommunication",{temp})
    return await new Promise<OpenAIResponseT>((resolve) => {
      setUserInput('')
      resolve(resp)
    });
  }

  const hydrate = async (messages:OpenAIMessage[]) :Promise<OpenAIResponseT> => {
    const config: RequestOptions = {
        [AxiosConfigOptions.url]: "/api/openai_completion",
        [AxiosConfigOptions.method]: HTTPMethods.POST,
        [AxiosConfigOptions.data]: messages
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
    <div className="overflow-hidden">
      <NavBar />
      <div className="border-t border-gray-400 mb-5"/>
      <div className="flex gap-10 ml-12 chat-box-height grow">
        <ChatHistoryBox messages={msgHistory} />
        <div className="m-0 p-0">
          <ChatBox messages={msgHistory} />
          <ChatBoxInput value={userInput} updateFunc={handleChange} submitFunc={handleSubmit} />
        </div>
      </div>
      
    </div>
  );
}

export default Chat;