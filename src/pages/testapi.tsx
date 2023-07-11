import { ResponseObj } from "@/types/externalApiCall";
import { useEffect, useState } from "react";
import OpenAICompletion from "./api/openai_completion";
import axios from "axios";

export type Card = {
    name: string,
    value: number,
    suit: string,
    set: string,
    isModifier: boolean,
    face: string,
    back: string,
}

const Testapi = () => {
    const BlankCard = {
        name: '',
        value: 1,
        suit: '',
        set: '',
        isModifier: false,
        face: '',
        back: '',
    } as Card;
    const [hydrated, setHydrated] = useState([BlankCard]); 

    const hydrate = async () => {
        const res = await axios.get<ResponseObj>("/api/openai_completion");
        console.log({res});
        const {data} = res;
        console.log({data});
    }

    useEffect(()=>{
        hydrate();
    },[])

    return (
        <>
            testing api route 

        </>
    );
}

export default Testapi;