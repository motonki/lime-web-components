
/**
 * Interface that actions must implement
 */
export interface LimeWebComponentAction {

    /**
     * 
     */
    readonly name: string;

    /**
     * A translation key to get a localized name. This is useful when
     * the action will i.e extend a list of actions rather than overriding
     * an existing one
     * 
     */
    readonly label?: string;

    /**
     * Return true if current context should be handled by this action.
     * Return false to allow the consumer to look for another action
     * that is willing to handle current context.
     * 
     * @param limetype
     * @param id 
     */
    handled(limetype: string, id: number): boolean;

    /**
     * Return true if this action is enabled for current context.
     * 
     * @param limetype 
     * @param id 
     */
    enabled(limetype: string, id: number): boolean;
    
    /**
     * Executes the action
     * 
     * @param platform A reference to the platform
     */
    execute(limetype: string, id: number): void;
}