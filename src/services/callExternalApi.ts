import axios from "axios";
import { RequestOptions, ResponseObj } from "@/types/externalApiCall";
const callExternalApi = async (options: RequestOptions, payload?:Record<string,string> ) : Promise<ResponseObj> => {
    console.log({options});
    try {
        const response = await axios(options);
        console.log("callExternalApi",{response});
        const { data, status } = response;
        console.log("callExternalApi",{data},{status});
        return await new Promise<ResponseObj>((resolve) => {
            resolve({
                data,
                status,
                error: null
            })
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error;
        
            const { response } = axiosError;
        
            let message = "http request failed";
            let statcode = 500;

            if (response && response.status) {
                statcode = response.status;
            }

            if (response && response.statusText) {
                message = response.statusText;
            }
            
            if (axiosError.message) {
                message = axiosError.message;
            }
        
            if (response && response.data && response.data.message) {
                message = response.data.message;
            }
            console.log({message});
            return await new Promise<ResponseObj>((resolve) => {
                resolve({
                    data: null,
                    status: statcode,
                    error: {
                        message: message
                    }
                })
            });
        }
    
        console.log({error});
        return await new Promise<ResponseObj>((resolve) => {
            resolve({
                data: null,
                status: null,
                error: {
                    message: (error instanceof Error) ? error.message : "unknown error"
                }
            })
        });
      }
}

export default callExternalApi;