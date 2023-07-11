import axios from "axios";
import { RequestOptions, ResponseObj } from "@/types/externalApiCall";
const callExternalApi = async (options: RequestOptions) : ResponseObj => {
    try {
        const response = await axios(options);
        const { data, status } = response.data;
        return {
          data,
          status,
          error: null,
        };
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error;
    
          const { response } = axiosError;
    
          let message = "http request failed";
    
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
          return {
            data: null,
            status: null,
            error: {
              message,
            },
          };
        }
    
        console.log({error});
        if (error instanceof Error)
        return {
          data: null,
          status: null,
          error: {
            message: error.message,
          },
        };
      }
}