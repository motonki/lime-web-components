
export enum ActionStateEnum {
    /**
     * The action does not want to handle the current context and leaves it
     * to the platform to decide what to do.
     */
    Unhandled = 0,

    /**
     * The action is enabled for current context.
     */
    Enabled = 1,

    /**
     * The action is disabled for current context.
     */
    Disabled = 2
}