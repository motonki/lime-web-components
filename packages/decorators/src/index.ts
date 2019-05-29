import { StateOptions } from '@limetech/lime-web-components-interfaces';

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
    name: string,
    options: StateOptions,
    service: {
        name: string,
        method: string
    }
}

interface ComponentMapping {
    component: Component,
    properties: Property[],
}

/**
 * Create a new state decorator
 *
 * @param {StateOptions} options decorator options
 * @param {StateDecoratorConfig} config decorator configuration
 *
 * @returns state decorator
 */
export function createStateDecorator(options: StateOptions, config: StateDecoratorConfig) {
    return (component: any, property: string) => {
        const componentMapping = getComponentMapping(component, property, options, config);

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
    let mapping: ComponentMapping = componentMappings.find(item => item.component === component);
    if (!mapping) {
        mapping = {
            properties: [],
            component
        };
        componentMappings.push(mapping);
    }

    mapping.properties.push({
        options,
        name: property,
        service: {
            name: config.name,
            method: config.method || 'subscribe'
        }
    });

    return mapping;
}

interface Subscription {
    instance: any,
    unsubscribes: (() => void)[]
}

/**
 * Extend the lifecycle methods on the component
 *
 * @param {Component} component the component to extend
 * @param {Property[]} properties
 */
function extendLifecycleMethods(component: Component, properties: Property[]) {
    const originalComponentWillLoad = component.componentWillLoad;
    const originalComponentDidUnload = component.componentDidUnload;
    let subscriptions: Subscription[] = [];

    component.componentWillLoad = function(...args) {
        properties.forEach(property => {
            subscribe.apply(this, [subscriptions, property]);
        });

        if (originalComponentWillLoad) {
            originalComponentWillLoad.apply(this, args)
        }
    };

    component.componentDidUnload = function(...args) {
        if (originalComponentDidUnload) {
            originalComponentDidUnload.apply(this, args);
        }

        unsubscribe.apply(this, [subscriptions]);
    }
}

/**
 * Subscribe to changes from the state
 *
 * @param {Subscription[]} subscriptions
 * @param property
 */
function subscribe(subscriptions: Subscription[], property: Property) {
    let subscription = subscriptions.find(item => item.instance === this);
    if (!subscription) {
        subscription = {
            instance: this,
            unsubscribes: []
        };

        subscriptions.push(subscription);
    }

    const unsubscribe = createSubscription.apply(this, [
        property.options,
        property.name,
        property.service.name,
        property.service.method
    ]);

    subscription.unsubscribes.push(unsubscribe);
}

/**
 * Unsubscribe to changes from the state
 *
 * @param {Subscription[]} subscriptions
 */
function unsubscribe(subscriptions: Subscription[] = []) {
    let subscription = subscriptions.find(item => item.instance === this);
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
 *
 * @param instance
 * @param property
 */
function mapState(instance: any, property: string) {
    return (state: any) => {
        instance[property] = state;
    }
}

/**
 * Create a state subscription
 *
 * @param {StateOptions} options options for the selector
 * @param {string} property name of the property on the component
 * @param {string} name name of the state service
 * @param {string} method name of method on the state service
 *
 * @returns {Function} unsubscribe function
 */
function createSubscription(options: StateOptions, property: string, name: string, method: string) {
    const myOptions = {...options};
    bindFunctions(myOptions, this);

    const service = this.platform.state[name];

    return service[method](mapState(this, property), myOptions);
}

/**
 * Bind connect functions to the current scope
 *
 * @param {StateOptions} options options for the selector
 * @param {*} scope the current scope to bind to
 */
function bindFunctions(options: StateOptions, scope) {
    if (options.filter) {
        options.filter = options.filter.map(func => func.bind(scope));
    }

    if (options.map) {
        options.map = options.map.map(func => func.bind(scope));
    }
}
