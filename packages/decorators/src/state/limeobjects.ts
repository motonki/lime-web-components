import {
    PlatformServiceName,
    StateOptions,
} from '@limetech/lime-web-components-interfaces';
import { createStateDecorator, StateDecoratorConfig } from '../index';

export interface LimeobjectsOptions extends StateOptions {
    limetype?: string;
    id?: number;
}

/**
 * Get a list of limeobjects
 *
 * @param {LimeobjectsOptions} [options] state decorator options
 *
 * @returns {Function} state decorator
 */
export function Limeobjects(options: LimeobjectsOptions = {}) {
    const config: StateDecoratorConfig = {
        name: PlatformServiceName.LimeobjectsState,
    };

    return createStateDecorator(options, config);
}

/**
 * Get the limeobject for the current context
 *
 * @param {StateOptions} [options] state decorator options
 *
 * @returns {Function} state decorator
 */
export function CurrentLimeobject(options: StateOptions = {}) {
    const config: StateDecoratorConfig = {
        name: PlatformServiceName.LimeobjectsState,
    };
    options.map = [currentLimeobject, ...(options.map || [])];

    return createStateDecorator(options, config);
}

function currentLimeobject(limeobjects: Record<string, Array<{ id: string }>>) {
    const { limetype, id } = this.context; // tslint:disable-line:no-invalid-this

    if (!limeobjects[limetype]) {
        return undefined;
    }

    return limeobjects[limetype].find(object => object.id === id);
}
