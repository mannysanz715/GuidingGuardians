import axios from "axios";
import { ClientRequest, ServerResponse } from "http";

const OpenAICompletion = async (req: ClientRequest, res: ServerResponse) => {
    const { OPENAI_APIKEY, OPENAI_COMPLETION_URL, OPENAI_MODEL } = process.env;
    const URL = `${OPENAI_COMPLETION_URL}`    
}

export default OpenAICompletion;