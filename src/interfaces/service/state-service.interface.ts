/**
 * Service for letting a Lime web component subscribe to state changes
 */
export interface StateService {

    /**
     * Connect an object property to the state
     * The connected property will be updated when changes in the state occur
     *
     * @param {StateSelector} selector state selector
     * @param {object} target object to update when state changes occur
     * @param {string} property name of the property on the target object to update
     * @param {StateOptions} options options for the selector
     *
     * @returns {Function} unsubscribe function
     */
    connect(
        selector: StateSelector,
        target: any,
        property: string,
        options: StateOptions
    ): () => void;
}

/**
 * Selector describing what can be connected to in the state
 */
export enum StateSelector {
    Limetypes = "LIMETYPES",
    Limeobjects = "LIMEOBJECTS",
    CurrentUser = "CURRENT_USER",
    Session = "SESSION",
    ApplicationName = "APPLICATION_NAME"
}

/**
 * Options for the state selector
 */
export interface StateOptions {
    arguments?: any[];
}
