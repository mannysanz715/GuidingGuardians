export type RequestOptions = {
    url: string,
    method: string,
    headers: {
        "content-type": string,
        "Authorization"?: string
    }
}

export type ResponseObj = {
    data: any,
    status: number | null,
    error: {
        message: string
    } | null    
}