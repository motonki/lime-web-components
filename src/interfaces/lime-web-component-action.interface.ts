import { LimeWebComponentPlatform } from "./lime-web-component-platform.interface";
// import { ActionStateEnum } from '../enums/action-state.enum';

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
     * Checks if the action is enabled at the moment
     * 
     * @param platform A reference to the platform
     */
    state(platform: LimeWebComponentPlatform,
          limetype?: string,
          id?: number): any;
    
    /**
     * Executes the action
     * 
     * @param platform A reference to the platform
     */
    execute(platform: LimeWebComponentPlatform,
            limetype?: string,
            id?: number): void;
}