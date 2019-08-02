/**
 * Service for displaying different notification messages
 */
export interface NotificationService {
    /**
     * Display a blocking alert dialog
     *
     * @param {string} title title of the dialog
     * @param {string} message message to display in the dialog
     * @param {AlertOptions} options
     *
     * @returns {Promise<void>} a promise that will be resolved when the dialog is closed
     */
    alert(
        title: string,
        message: string,
        options?: AlertOptions
    ): Promise<void>;

    /**
     * Display a blocking confirm dialog
     *
     * @param {string} title title of the dialog
     * @param {string} message message to display in the dialog
     * @param {ConfirmOptions} options
     *
     * @returns {Promise<boolean>} a promise that will be resolved to true when the dialog is closed.
     * If the accepting button was pressed, the promise will resolve to true.
     * Otherwise, the promise will resolve to false.
     */
    confirm(
        title: string,
        message: string,
        options?: ConfirmOptions
    ): Promise<boolean>;

    /**
     * Display a non-blocking notification
     *
     * @param {string} message message to display in the notification
     * @param {NotificationOptions} options
     *
     * @returns {Promise<boolean>} a promise that will be resolved when the notification is closed.
     * If the notification has an action button and it was pressed, the promise will resolve to true.
     * Otherwise, the promise will resolve to false.
     */
    notify(message: string, options?: NotificationOptions): Promise<boolean>;

    /**
     * Display a non-blocking and non-transient message
     *
     * @param {string} message message to display in the banner
     * @param {ReportOptions} options
     *
     * @returns {Promise<boolean>} a promise that will be resolved when the notification is closed.
     * If the notification has an action button and it was pressed, the promise will resolve to true.
     * Otherwise, the promise will resolve to false.
     */
    report(message: string, options?: ReportOptions): Promise<boolean>;
}

/**
 * Options for the confirmation dialog
 */
export interface AlertOptions {
    /**
     * Text to display on the button
     */
    acceptText?: string;
}

/**
 * Options for the confirmation dialog
 */
export interface ConfirmOptions {
    /**
     * Text to display on the button for the accept action
     */
    acceptText?: string;

    /**
     * Text to display on the button for the cancel action
     */
    cancelText?: string;
}

/**
 * Options for notifications
 */
export interface NotificationOptions {
    /**
     * Number of milliseconds to wait before the notification auto fades.
     */
    timeout?: number;

    /**
     * Text to display on the action button
     */
    actionText?: string;

    /**
     * Set to true to display the message on multiple lines
     */
    multiline?: boolean;

    /**
     * Set to true to make the notification dismissible
     */
    dismissible?: boolean;
}

/**
 * Options for reports
 */
export interface ReportOptions {
    /**
     * Text to display on the action button
     */
    actionText?: string;

    /**
     * Icon to display on the banner
     */
    icon?: string;
}
