import { RequestOptions, ResponseObj, HTTPMethods, AxiosConfigOptions } from "@/types/externalApiCall";
import callExternalApi from "@/services/callExternalApi";

import { NextApiRequest, NextApiResponse } from "next";

const OpenAICompletion = async (req: NextApiRequest, res: NextApiResponse<ResponseObj>) => {
    const { OPENAI_APIKEY, OPENAI_COMPLETION_URL, OPENAI_MODEL } = process.env;
    const URL = `${OPENAI_COMPLETION_URL}`    
    
    const config : RequestOptions = {
        [AxiosConfigOptions.url]: "https://caravan-mern-back.herokuapp.com/user/register",
        [AxiosConfigOptions.method]: HTTPMethods.POST,
        [AxiosConfigOptions.headers]: {
            "content-type": "application/json",
        },
        [AxiosConfigOptions.data]:req.body ? req.body : undefined,
    };

    const { data, status, error } = await callExternalApi(config);

    console.log("openapi_completions",{data:data, status:status, error:error})

    return res.status(status ? status : 500).json({data: data, status: status, error: error});
}

export default OpenAICompletion;