
/**
 * Gives Lime web components access to services that the platform has registered
 */
export interface ServiceContainer {
    /**
     * Get a service
     * 
     * @param {string} name name of the service
     * @returns {*} the service
     */
    get(name: string): any;

    /**
     * Register a service
     * 
     * @param {string} name name of the service
     * @param {*} service the service
     */
    set(name: string, service: any): void;

    /**
     * Checks if a service has been registered
     * 
     * @param {string} name 
     * @returns {boolean} true if the service exist, false otherwise
     */
    has(name: string): boolean;
}