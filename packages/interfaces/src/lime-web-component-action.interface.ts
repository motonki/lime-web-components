
import { LimeWebComponentContext } from "./lime-web-component-context.interface";

/**
 * Interface that actions must implement
 */
export interface LimeWebComponentAction {

    /**
     * The name of the action which is what ActionService.get matches on
     * when returning its list of actions.
     * 
     * To override a core action you give your action the same name as the
     * core action to override as in limeobject.create
     * To create a custom action you give your action a unique name and a
     * rule of thumb is to simply prefix with your addons name.
     */
    readonly name: string;

    /**
     * Return true if current context should be handled by this action.
     * Return false to allow the consumer to look for another action
     * that is willing to handle current context.
     * 
     * @param limetype
     * @param id 
     */
    handled(context: LimeWebComponentContext): boolean;

    /**
     * Return true if this action is enabled for current context.
     * 
     * @param limetype 
     * @param id 
     */
    enabled(context: LimeWebComponentContext): boolean;
    
    /**
     * Executes the action
     * 
     * @param platform A reference to the platform
     */
    execute(context: LimeWebComponentContext): void;
}