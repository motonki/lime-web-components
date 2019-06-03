/**
 * Service for handling application level events
 */
export interface EventDispatcherService {
    /**
     * Dispatch a new event
     *
     * @param {string} eventName name of the event to dispatch
     * @param {T} data data attached to the event
     */
    dispatch<T>(eventName: string, data: T): CustomEvent<T>;

    /**
     * Add a new listener for a specific event
     *
     * @param {string} eventName name of the event to listen to
     * @param {Function} listener listener to invoke when the event is dispatched
     */
    addListener<T>(
        eventName: string,
        listener: (event: CustomEvent<T>) => void
    ): void;

    /**
     * Stop listening for a specific event
     *
     * @param {string} eventName name of the event to stop listening to
     * @param {Function} listener listener to remove from the dispatcher
     */
    removeListener<T>(
        eventName: string,
        listener: (event: CustomEvent<T>) => void
    ): void;
}
