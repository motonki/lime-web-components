import { StateOptions } from '@lime-web-components/interfaces';
import { createStateDecorator, StateDecoratorConfig } from '../index';

export interface FiltersOptions extends StateOptions {
    id?: string,
    limetype?: string;
}

/**
 * Gets a list of filters
 */
export function Filters(options: FiltersOptions = {}) {
    const config: StateDecoratorConfig = {
        name: 'filters'
    };

    return createStateDecorator(options, config);
}
