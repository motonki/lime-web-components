import { StateOptions } from '@limetech/lime-web-components-interfaces';
import { createStateDecorator, StateDecoratorConfig } from '../index';

/**
 * Get the name of the application
 *
 * @param {StateOptions} [options] options for the state selector
 *
 * @returns {Function} state decorator
 */
export function ApplicationName(options: StateOptions = {}) {
    const config: StateDecoratorConfig = {
        name: 'application',
    };
    options.map = [getApplicationName, ...(options.map || [])];

    return createStateDecorator(options, config);
}

function getApplicationName(applicationData: any) {
    return applicationData.applicationName;
}
