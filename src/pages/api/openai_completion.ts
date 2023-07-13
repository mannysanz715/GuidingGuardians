import { RequestOptions, ResponseObj, HTTPMethods, AxiosConfigOptions } from "@/types/externalApiCall";
import callExternalApi from "@/services/callExternalApi";

import { NextApiRequest, NextApiResponse } from "next";

/** OpenAICompletion ***
 * This endpoint requires that req includes a body 
 * req.body must be structured as a json object of this pattern
 *      [{
 *          "role": "system",
 *          "content": "the message to process",
 *      },{...}] 
 *  where each object in the array represents the history of this chain of chat
 * @param req 
 * @param res 
 * @returns 
 */
const OpenAICompletion = async (req: NextApiRequest, res: NextApiResponse<ResponseObj>) => {
    const { SECONDARY_OPENAI_KEY, OPENAI_APIKEY, OPENAI_COMPLETION_URL, OPENAI_MODEL } = process.env;
    if(!req.body) {
        return res.status(400).json({data:null, status:400, error: {message:"Improper request body"}});
    }
    const payload = {
        "model": OPENAI_MODEL || "gpt-3.5-turbo",
        "messages":  req.body,
        "temperature": 0.6
    }    
    
    const config : RequestOptions = {
        [AxiosConfigOptions.url]: OPENAI_COMPLETION_URL,
        [AxiosConfigOptions.method]: HTTPMethods.POST,
        [AxiosConfigOptions.headers]: {
            "content-type": "application/json",
            "Authorization": `Bearer ${OPENAI_APIKEY}`,
        },
        [AxiosConfigOptions.data]: payload
    };

    // console.log("openapi_completions",config[AxiosConfigOptions.data])

    const { data, status, error } = await callExternalApi(config);

    console.log("openapi_completions",{data:data, status:status, error:error})

    return res.status(status ? status : 500).json({data: data, status: status, error: error});
}

export default OpenAICompletion;