const connections = [];

/**
 * Connect a property to a key in the state. 
 * The connected property will automatically receive state updates
 * 
 * @param {string} key state key to connect to
 */
export function Connect(key) {
    return (target, property) => {
        const connection = initConnection(target, property, key);

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
 * @param {string} key name of key in the state
 * 
 * @returns {object} a connection object that holds all mappings for the target
 */
function initConnection(target, property, key) {
    let connection = connections.find(item => item.target === target);
    if (!connection) {
        connection = {
            mappings: [],
            target
        };
        connections.push(connection);
    }

    connection.mappings.push({
        key,
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

            const unsubscribe = subscribe.apply(this, [mapping.key, mapping.property]);
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
 * @param {*} key state key to subscribe to
 * @param {*} property object property 
 * 
 * @returns {Function} unsubscribe function
 */
function subscribe(key, property) {
    if (!this.element || !(this.element instanceof HTMLElement)) {
        console.error('HTMLElement not found', this.element);
        return nop;
    }

    return this.platform.state.connect(key, this.element, property);
}