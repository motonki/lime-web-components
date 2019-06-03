/**
 * Service for letting a Lime web component subscribe to state changes
 */
export interface StateService {
    /**
     * Subscribe to state changes
     *
     * @param {Function} callback function to call when subscription updates
     * @param {StateOptions} [options] options for the state selector
     *
     * @returns {Function} unsubscribe callback
     */
    subscribe(callback: () => void, options?: StateOptions): () => void;
}

/**
 * Options for the state selector
 */
export interface StateOptions {
    /**
     * List of functions that will be used to map the state.
     * The functions will be bound to the web component instance
     */
    map?: { (state: any): any }[],

    /**
     * List of functions that will be used to filter any changes to the state.
     * The functions will be bound to the web component instance
     */
    filter?: { (state: any): boolean }[]
}

export * from './state/limeobjects-service.interface';
