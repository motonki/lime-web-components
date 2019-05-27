import { StateOptions } from '@lime-web-components/interfaces';
import { createStateDecorator, StateDecoratorConfig } from '../index';

/**
 * Get the currently logged in user
 */
export function CurrentUser(options: StateOptions = {}) {
    const config: StateDecoratorConfig = {
        name: 'application'
    }
    options.map = [getCurrentUser, ...options.map || []];

    return createStateDecorator(options, config);
}

function getCurrentUser(applicationData: any) {
    return applicationData.currentUser;
}