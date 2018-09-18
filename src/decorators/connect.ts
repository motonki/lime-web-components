import { StateSelector, StateOptions, StateService } from "../interfaces/service/state-service.interface";
import { LimeWebComponentPlatform } from "../interfaces/lime-web-component-platform.interface";

const connections = [];

/**
 * Connect a property to a property in the state.
 * The connected property will automatically receive state updates
 *
 * @param {StateSelector} selector state selector describing what to connect to
 * @param {StateOptions} options options for the selector
 */
export function Connect(selector: StateSelector, options: StateOptions = {}) {
    return (target: object, property: string) => {
        const connection = initConnection(target, property, selector, options);

        if (connection.mappings.length === 1) {
            extendLifecycleMethods(target, connection.mappings);
        }
    }
}

/**
 * Initialize a connection from the state to an object property
 *
 * @param {object} target the class the property belongs to
 * @param {string} property name of the property on the object
 * @param {StateSelector} selector state selector
 * @param {StateOptions} options options for the selector
 *
 * @returns {object} a connection object that holds all mappings for the target
 */
function initConnection(target: object, property: string, selector: StateSelector, options: StateOptions) {
    let connection = connections.find(item => item.target === target);
    if (!connection) {
        connection = {
            mappings: [],
            target
        };
        connections.push(connection);
    }

    connection.mappings.push({
        selector,
        options,
        property
    });

    return connection;
}

/**
 * Extend the lifecycle methods on the target
 *
 * @param {*} target the target class to extend
 * @param {*} mappings
 */
function extendLifecycleMethods(target, mappings) {
    const componentWillLoad = target.componentWillLoad;
    const componentDidUnload = target.componentDidUnload;
    let subscriptions = [];

    // Extend componentWillLoad with a new function that will
    // subscribe to state changes
    target.componentWillLoad = function(...args) {
        if (componentWillLoad) {
            componentWillLoad.apply(this, args)
        }

        mappings.forEach(mapping => {
            let subscription = subscriptions.find(item => item.target === this);
            if (!subscription) {
                subscription = {
                    target: this,
                    unsubscribes: []
                };
                subscriptions.push(subscription);
            }

            const unsubscribe = subscribe.apply(this, [mapping.selector, mapping.options, mapping.property]);
            subscription.unsubscribes.push(unsubscribe);
        });
    };

    // Extend componentDidUnload with a new function that will
    // unsubscribe from state changes
    target.componentDidUnload = function(...args) {
        if (componentDidUnload) {
            componentDidUnload.apply(this, args);
        }

        let subscription = subscriptions.find(item => item.target === this);
        subscription.unsubscribes.forEach(unsubscribe => unsubscribe());
        subscriptions = subscriptions.filter(item => item.target !== this);
    };
}

const nop = () => null;

/**
 * Subscribe to state changes
 *
 * @param {StateSelector} selector state selector
 * @param {StateOptions} options options for the selector
 * @param {string} property object property name
 *
 * @returns {Function} unsubscribe function
 */
function subscribe(selector: StateSelector, options: StateOptions, property: string) {
    if (!this.element || !(this.element instanceof HTMLElement)) {
        console.error('HTMLElement not found', this.element);
        return nop;
    }

    const state: StateService = this.platform.state;

    return state.connect(selector, this.element, property, options);
}
