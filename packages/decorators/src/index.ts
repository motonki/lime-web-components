/* tslint:disable:no-invalid-this */
import {
    LimeWebComponentPlatform,
    StateOptions,
} from '@limetech/lime-web-components-interfaces';

export * from './state/application-name';
export * from './state/configs';
export * from './state/current-user';
export * from './state/device';
export * from './state/filters';
export * from './state/limeobjects';
export * from './state/limetypes';
export * from './state/session';

export interface StateDecoratorConfig {
    /**
     * Name of the state service to use in the platform
     */
    name: string;

    /**
     * Name of the method on the service to use
     */
    method?: string;
}

interface Component {
    componentWillLoad: () => void;
    componentDidUnload: () => void;
}

interface Property {
    name: string;
    options: StateOptions;
    service: {
        name: string;
        method: string;
    };
}

interface ComponentMapping {
    component: Component;
    properties: Property[];
}

/**
 * Create a new state decorator
 *
 * @param {StateOptions} options decorator options
 * @param {StateDecoratorConfig} config decorator configuration
 *
 * @returns {Function} state decorator
 */
export function createStateDecorator(
    options: StateOptions,
    config: StateDecoratorConfig
) {
    return (component: any, property: string) => {
        const componentMapping = getComponentMapping(
            component,
            property,
            options,
            config
        );

        if (componentMapping.properties.length === 1) {
            extendLifecycleMethods(component, componentMapping.properties);
        }
    };
}

const componentMappings: ComponentMapping[] = [];

/**
 * Get mappings for a component, containing the properties with a state decorator for
 * the current component
 *
 * @param {Component} component the component class containing the decorator
 * @param {string} property name of the property
 * @param {StateOptions} options decorator options
 * @param {StateDecoratorConfig} config decorator configuration
 *
 * @returns {ComponentMapping} mappings for the component
 */
function getComponentMapping(
    component: Component,
    property: string,
    options: StateOptions,
    config: StateDecoratorConfig
): ComponentMapping {
    let mapping: ComponentMapping = componentMappings.find(
        item => item.component === component
    );
    if (!mapping) {
        mapping = {
            properties: [],
            component: component,
        };
        componentMappings.push(mapping);
    }

    mapping.properties.push({
        options: options,
        name: property,
        service: {
            name: config.name,
            method: config.method || 'subscribe',
        },
    });

    return mapping;
}

interface Subscription {
    instance: any;
    unsubscribes: Array<() => void>;
}

/**
 * Extend the lifecycle methods on the component
 *
 * @param {Component} component the component to extend
 * @param {Property[]} properties the properties with which to extend the component
 *
 * @returns {void}
 */
function extendLifecycleMethods(component: Component, properties: Property[]) {
    const originalComponentWillLoad = component.componentWillLoad;
    const originalComponentDidUnload = component.componentDidUnload;
    const subscriptions: Subscription[] = [];

    component.componentWillLoad = function(...args) {
        properties.forEach(property => {
            subscribe.apply(this, [subscriptions, property]);
        });

        if (originalComponentWillLoad) {
            originalComponentWillLoad.apply(this, args);
        }
    };

    component.componentDidUnload = function(...args) {
        if (originalComponentDidUnload) {
            originalComponentDidUnload.apply(this, args);
        }

        unsubscribeAll.apply(this, [subscriptions]);
    };
}

/**
 * Subscribe to changes from the state
 * Use as `subscription.apply(componentToAugment, [subscriptions, property])`.
 *
 * @param {Subscription[]} subscriptions existing subscriptions on the component
 * @param {Property} property property to update when subscription triggers
 *
 * @returns {void}
 */
function subscribe(subscriptions: Subscription[], property: Property) {
    let subscription = subscriptions.find(item => item.instance === this);
    if (!subscription) {
        subscription = {
            instance: this,
            unsubscribes: [],
        };

        subscriptions.push(subscription);
    }

    const unsubscribe = createSubscription.apply(this, [
        property.options,
        property.name,
        property.service.name,
        property.service.method,
    ]);

    subscription.unsubscribes.push(unsubscribe);
}

/**
 * Unsubscribe to changes from the state
 *
 * @param {Subscription[]} subscriptions existing subscriptions on the component
 *
 * @returns {void}
 */
function unsubscribeAll(subscriptions: Subscription[] = []) {
    const subscription = subscriptions.find(item => item.instance === this);
    subscription.unsubscribes.forEach(unsubscribe => unsubscribe());
    for (let i = subscriptions.length - 1; i >= 0; i--) {
        const item = subscriptions[i];
        if (item.instance !== this) {
            continue;
        }

        subscriptions.splice(i, 1);
    }
}

/**
 * Get a function that accepts a state, and updates the given property
 * on the given component with that state
 *
 * @param {any} instance the component to augment
 * @param {string} property name of the property on the component
 *
 * @returns {Function} updates the state
 */
function mapState(instance: any, property: string) {
    return (state: any) => {
        instance[property] = state;
    };
}

/**
 * Create a state subscription
 * Use as `createSubscription.apply(componentToAugment, [options, property, name, method])`.
 *
 * @param {StateOptions} options options for the selector
 * @param {string} property name of the property on the component
 * @param {string} name name of the state service
 * @param {string} method name of method on the state service
 *
 * @returns {Function} unsubscribe function
 */
function createSubscription(
    options: StateOptions,
    property: string,
    name: string,
    method: string
) {
    const myOptions = { ...options };
    bindFunctions(myOptions, this);

    const platform: LimeWebComponentPlatform = this.platform;
    if (!platform.has(name)) {
        throw new Error(`Service ${name} does not exist`);
    }

    const service: any = platform.get(name);

    return service[method](mapState(this, property), myOptions);
}

/**
 * Bind connect functions to the current scope
 *
 * @param {StateOptions} options options for the selector
 * @param {*} scope the current scope to bind to
 *
 * @returns {void}
 */
function bindFunctions(options: StateOptions, scope: any) {
    if (options.filter) {
        options.filter = options.filter.map(func => func.bind(scope));
    }

    if (options.map) {
        options.map = options.map.map(func => func.bind(scope));
    }
}
