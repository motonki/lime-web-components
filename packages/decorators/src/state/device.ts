import { StateOptions } from '@limetech/lime-web-components-interfaces';
import { createStateDecorator, StateDecoratorConfig } from '../index';

/**
 * DeviceType
 *
 * @type {String}
 */
export type DeviceType = 'desktop' | 'tablet' | 'phone';

/**
 * Get the current device type
 *
 * The device will only indicate roughly how big the viewport is, not what actual device is being used
 *
 * @param {StateOptions} [options] state decorator options
 *
 * @returns {Function} state decorator
 */
export function Device(options: StateOptions = {}) {
    const config: StateDecoratorConfig = {
        name: 'device'
    };

    return createStateDecorator(options, config);
}
