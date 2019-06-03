import { StateOptions } from '@limetech/lime-web-components-interfaces';
import { createStateDecorator, StateDecoratorConfig } from '../index';

/**
 * ConfigsOptions
 */
export interface ConfigsOptions extends StateOptions {
    name?: string
}

/**
 * Gets an object with all configs where key is used as key.
 *
 * @param {ConfigsOptions} options state decorator options
 *
 * @returns {Function} state decorator
 */
export function Configs(options: ConfigsOptions) {
    const config: StateDecoratorConfig = {
        name: 'configs'
    };

    return createStateDecorator(options, config);
}
