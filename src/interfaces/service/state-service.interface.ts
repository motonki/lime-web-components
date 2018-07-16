/**
 * Service for letting a Lime web component subscribe to state changes
 */
export interface StateService {
    
    /**
     * Connect an object property to the state
     * The connected property will be updated when changes in the state occur
     *
     * @param {string} selector selector describing what to observe in the state
     * @param {object} target object to update when state changes occur
     * @param {string} property name of the property on the target object to update
     *
     * @returns {Function} unsubscribe function
     */
    connect(selector: string, target: any, property: string): () => void;
}