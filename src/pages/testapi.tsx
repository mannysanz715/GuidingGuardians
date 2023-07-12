import { AxiosConfigOptions, HTTPMethods, RequestOptions, ResponseObj } from "@/types/externalApiCall";
import { useEffect, useState } from "react";

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
        const config: RequestOptions = {
            [AxiosConfigOptions.url]: "/api/openai_completion",
            [AxiosConfigOptions.method]: HTTPMethods.POST,
            [AxiosConfigOptions.data]: {
                name: "Joe Average",
                gamertag: "JoeAve",
                email: "joeaverage@here.net",
                password: "mypass",
            }
        }
        const res = await axios<ResponseObj>(config);
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