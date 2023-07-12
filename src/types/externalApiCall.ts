
export enum HTTPMethods {
    GET     = 'GET',
    POST    = 'POST',
    PUT     = 'PUT',
    PATCH   = 'PATCH',
    DELETE  = 'DELETE',
    HEAD    = 'HEAD',
    CONNECT = 'CONNECT',
    OPTIONS = 'OPTIONS',
    TRACE   = 'TRACE'
} 

export enum AxiosConfigOptions {
    url                     = 'url',                    // string URL to send request to
    method                  = 'method',                 // HTTP protocol
    baseURL                 = 'baseURL',                // can set a base URL for an axios instance then use relative URLs
    transformRequest        = 'transformRequest',       // a fuction to modify data before sending the request
    transformResponse       = 'transformResponse',      // a function to modify data before the then/catch
    headers                 = 'headers',                // object key value pairs of custom headers
    params                  = 'params',                 // URL params to send with the request
    paramsSerializer        = 'paramsSerializer',       // function for serializing params
    data                    = 'data',                   // data to send as request body (the payload) only valid for PUT POST DELETE and PATCH
    timeout                 = 'timeout',                // number of millis before request is aborted (default 0 no timeout)
    withCredentials         = 'withCredentials',        // bool should cross-site requests include credentials
    adapter                 = 'adapter',                // function allow for custom handling of requests
    auth                    = 'auth',                   // {username:'', password:''} use basic HTTP authorization
    responseType            = 'responseType',           // default json type of data from the server can be json, arraybuffer, document, text, stream, or blob
    responseEncoding        = 'responseEncoding',       // default utf8 
    xsrfCookieName          = 'xsrfCookieName',         // name of cookie for xsrf token
    xsrfHeaderName          = 'xsrfHeaderName',         // name of the header that carries the xsrf token value
    onUploadProgress        = 'onUploadProgress',       // function allows handling of progress events for uploads
    onDownloadProgress      = 'onDownloadProgress',     // function allows handling of progress events for downloads
    maxContentLength        = 'maxContentLength',       // max size of response
    maxBodyLength           = 'maxBodyLength',          // max size of request
    validateStatus          = 'validateStatus',         // function defines success/fail HTTP status codes
    maxRedirects            = 'maxRedirects',           // max number of redirects to follow
    socketPath              = 'socketPath',             // define UNIX socket to send requests to overrides proxy
    httpAgent               = 'httpAgent',              // define a custom agent to use when performing HTTP requests
    httpsAgent              = 'httpsAgent',             // define a custom agent to use when performing HTTPS requests
    proxy                   = 'proxy',                  // {protocol:'', host:'', port:#, auth:{as above}} describe proxy
    cancelToken             = 'cancelToken',            // specify a token that can be used to cancel a request
    decompress              = 'decompress'              // bool default true should response be decompressed automatically
}

export type RequestOptions = Record<string, unknown>

export type ResponseObj = {
    data: Record<string, unknown> | Record<string, unknown>[] | null,
    status: number | null,
    error: {
        message: string
    } | null    
}
