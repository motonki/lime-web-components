/**
 * HTTP service for sending requests to a given URL
 *
 * By default, the service will work with the JSON data format. If anything but JSON is returned from the endpoint,
 * the `responseType` property in the `options` parameter needs to be set.
 */
export interface HttpService {
    /**
     * Sends a get request.
     *
     * @param {string} url - Url to resource (for instance my_addon/endpoint).
     * @param {object} options - The HTTP options to send with the request.
     * @returns {Promise}
     */
    get(url: string, options?: HttpOptions): Promise<any>;

    /**
     * Sends a post request.
     *
     * @param {string} url - Url to resource (for instance my_addon/endpoint).
     * @param {object} data - Payload to send to the server.
     * @param {object} options - The HTTP options to send with the request.
     * @returns {Promise}
     */
    post(url: string, data?: {}, options?: HttpOptions): Promise<any>;

    /**
     * Sends a patch request.
     *
     * @param {string} url - Url to resource (for instance my_addon/endpoint).
     * @param {object} data - Payload to send to the server.
     * @param {object} options - The HTTP options to send with the request.
     * @returns {Promise}
     */
    patch(url: string, data?: {}, options?: HttpOptions): Promise<any>;

    /**
     * Sends a put request.
     *
     * @param {string} url - Url to resource (for instance my_addon/endpoint).
     * @param {object} data - Payload to send to the server.
     * @param {object} options - The HTTP options to send with the request.
     * @returns {Promise}
     */
    put(url: string, data?: {}, options?: HttpOptions): Promise<any>;

    /**
     * Sends a delete request.
     *
     * @param {string} url - Url to resource (for instance my_addon/endpoint).
     * @param {object} options - The HTTP options to send with the request.
     * @returns {Promise}
     */
    delete(url: string, options?: HttpOptions): Promise<any>;
}

export interface HttpOptions {
    /**
     * Query parameters to include in the request
     */
    params?: HttpParams,

    /**
     * Additional HTTP-headers to send in the request
     */
    headers?: HttpHeaders,

    /**
     * Type of the response that is returned. Defaults to `json`
     */
    responseType?: HttpResponseType;
}

export interface HttpParams {
    [param: string]: string | string[];
}

export interface HttpHeaders {
    [header: string]: string | string[];
}

export type HttpResponseType = 'text' | 'json' | 'arraybuffer' | 'blob';
