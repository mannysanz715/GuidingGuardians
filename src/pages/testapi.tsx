import { AxiosConfigOptions, HTTPMethods, RequestOptions, ResponseObj } from "@/types/externalApiCall";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

import axios from "axios";

export type OpenAIMessage = {
    role: string,
    content: string,
};
export type OpenAIResponseChoice = {
    finish_reason: string,
    index: number,
    message: OpenAIMessage,
}

export type OpenAIResponseT = {
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

const Testapi = () => {
    const blankMessage = {
        role: '',
        content: '',
    }
    const blankChoice = {
        finish_reason: '',
        index: 0,
        message: blankMessage,
    }
    const blankResp = {
        choices: [blankChoice],
        id: '',
        object: '',
        created: 0,
        model: '',
        usage:{ 
            completion_tokens: 0,
            prompt_tokens: 0,
            total_tokens: 0,
        }
    }
    
    const [hydrated, setHydrated] = useState(blankResp);
    const [msgHistory, setMsgHistory] = useState([blankMessage]); 
    const [userInput, setUserInput] = useState("");

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

    const handleChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setUserInput(target.value);
    }

    const handleSubmit = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.preventDefault();
        const temp = [...msgHistory];
        temp.push({role: "user", content: userInput});
        console.log("testapi - handleSubmit",{userInput})
        const resp = await hydrate(userInput);
        if (resp) {
            temp.push(resp.choices[0].message);
        }
        setMsgHistory(temp);
        console.log("testapi - handleSubmit",{temp})
    }

    return (
        <>
            testing api route 
            <h1>OpenAI Says</h1>
            <div className="bg-zinc-500 h-100 flex justify center">
                <h1>test</h1>
                <ul>
                    {msgHistory && msgHistory.map((message, idx)=>{ 
                    //    {console.log("in map:", message.content)}
                       return <li key={idx}>{message.content}</li>
                    })}
                </ul>
            </div>
            <input type="text" onChange={(e)=>{handleChange(e)}}></input>
            <button type="submit" onClick={(e)=>{handleSubmit(e)}}>submit</button>
        </>
    );
}

export default Testapi;