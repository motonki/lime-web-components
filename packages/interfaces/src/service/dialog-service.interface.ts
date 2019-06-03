/**
 *
 */
export interface DialogService {
    /**
     * Create a new dialog
     *
     * @param name the name of the dialog. The name is the same as the tag name for the web component
     * @param properties any properties to send to the dialog
     * @param listeners any event listeners to register on the dialog
     *
     * @returns id representing the dialog
     */
    create(
        name: string,
        properties?: DialogProperties,
        listeners?: DialogListeners
    ): number;

    /**
     * Destroy a dialog
     *
     * @param id id representing the dialog
     */
    destroy(id: number): void;
}

export interface DialogProperties {
    [prop: string]: any;
}

export interface DialogListeners {
    [listener: string]: (event?: CustomEvent<any>) => void;
}
