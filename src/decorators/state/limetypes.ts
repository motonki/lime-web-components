import { StateOptions } from '../../interfaces/service/state-service.interface';
import { createStateDecorator, StateDecoratorConfig } from '../index';

export interface LimetypesOptions extends StateOptions {
    name?: string;
}

/**
 * Get a list of limetypes
 */
export function Limetypes(options: LimetypesOptions = {}) {
    const config: StateDecoratorConfig = {
        name: 'limetypes'
    };

    return createStateDecorator(options, config);
}

/**
 * Get the limetype for the current context
 */
export function CurrentLimetype(options: StateOptions = {}) {
    const config: StateDecoratorConfig = {
        name: 'limetypes'
    };
    options.map = [currentLimetype, ...options.map || []];

    return createStateDecorator(options, config);
}

function currentLimetype(limetypes: [any]) {
    const { limetype } = this.context;

    return limetypes.find(lt => lt.name === limetype);
}
