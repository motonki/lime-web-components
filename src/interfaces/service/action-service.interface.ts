import { LimeWebComponentAction } from '../lime-web-component-action.interface';

/**
 * Service for registering and accessing actions
 */
export interface ActionService {

    get(name: string): LimeWebComponentAction[];

    register(action: LimeWebComponentAction): void;

}