/**
 *
 */
export interface HttpService {
    /**
     * Sends a get request.
     *
     * @param {string} url - Url to resource (for instance /api/v1/limetypes).
     * @returns {Promise}
     */
    get(url: string): Promise<any>;

    /**
     * Sends a post request.
     *
     * @param {string} url - Url to resource (for instance /api/v1/limetypes).
     * @param {object} data - The payload you want to send to the server.
     * @returns {Promise}
     */
    post(url: string, data?: {}): Promise<any>;

    /**
     * Sends a patch request.
     *
     * @param {string} url - Url to resource (for instance /api/v1/limetypes).
     * @param {object} data - The payload you want to send to the server.
     * @returns {Promise}
     */
    patch(url: string, data?: {}): Promise<any>;

    /**
     * Sends a put request.
     *
     * @param {string} url - Url to resource (for instance /api/v1/limetypes).
     * @param {object} data - The payload you want to send to the server.
     * @returns {Promise}
     */
    put(url: string, data?: {}): Promise<any>;

    /**
     * Sends a delete request.
     *
     * @param {string} url - Url to resource (for instance /api/v1/limetypes).
     * @returns {Promise}
     */
    delete(url: string): Promise<any>;
}
