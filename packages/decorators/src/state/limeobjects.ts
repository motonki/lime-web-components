import { StateOptions } from '@lime-web-components/interfaces';
import { createStateDecorator, StateDecoratorConfig } from '../index';

export interface LimeobjectsOptions extends StateOptions {
    limetype?: string;
    id?: number;
}

/**
 * Get a list of limeobjects
 */
export function Limeobjects(options: LimeobjectsOptions = {}) {
    const config: StateDecoratorConfig = {
        name: 'limeobjects'
    }

    return createStateDecorator(options, config);
}

/**
 * Get the limeobject for the current context
 */
export function CurrentLimeobject(options: StateOptions = {}) {
    const config: StateDecoratorConfig = {
        name: 'limeobjects'
    }
    options.map = [currentLimeobject, ...options.map || []];

    return createStateDecorator(options, config);
}

function currentLimeobject(limeobjects: object) {
    const { limetype, id } = this.context;

    if (!limeobjects[limetype]) {
        return undefined;
    }

    return limeobjects[limetype].find(object => object.id === id);
}
