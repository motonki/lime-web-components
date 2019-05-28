import { StateOptions } from '@limetech/lime-web-components-interfaces';
import { createStateDecorator, StateDecoratorConfig } from '../index';

export interface ConfigsOptions extends StateOptions {
    name?: string
}

/**
 * Gets an object with all configs where key is used as key.
 */
export function Configs(options: ConfigsOptions) {
    const config: StateDecoratorConfig = {
        name: 'configs'
    };

    return createStateDecorator(options, config);
}
