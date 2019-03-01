export type CommandClass = new (...args: any[]) => any;
export type CommandIdentifier = CommandClass | string;

/**
 * Service for registering and executing commands
 */
export interface CommandBusService extends CommandHandler {
    /**
     * Register a command to be executed by the given handler
     *
     * @param commandClass type of command
     * @param handler the handler instance used to execute the command
     */
    register(commandClass: CommandClass, handler: CommandHandler): void;

    /**
     * Execute the given command with it's registered command handler
     *
     * @param command command to execute
     *
     * @return result from the command handler
     */
    handle(command: object): any;

    /**
     * Check if a command is supported
     *
     * @param commandId identifier of the command. Can be either the class or the string the class was registered with
     *
     * @returns true if the command is supported, false otherwise
     */
    isSupported(commandId: CommandIdentifier): boolean;
}

/**
 *
 */
export interface CommandHandler {
    /**
     * Handle the execution of the given command
     *
     * @param command the command to handle
     *
     * @return the result of the operation
     */
    handle(command: object): any;
}

export type CallableCommandMiddleware = (command: object) => any;

/**
 * Middleware for the command bus
 */
export interface CommandMiddleware {
    /**
     * Execute the middleware before passing the command further down the chain
     *
     * @param command the command that is being handled
     * @param next the next middleware in the chain
     */
    execute(command: object, next: CallableCommandMiddleware): any;
}

export interface CommandOptions {
    /**
     * Id of the command
     */
    id: string;
}

/**
 * Register a class as a command
 *
 * @param options
 */
export function Command(options: CommandOptions) {
    return (commandClass: CommandClass) => {
        setCommandId(commandClass, options.id);
    };
}

function setCommandId(commandClass: CommandClass, id: string) {
    commandClass['commandId'] = id;
}

/**
 * Get the registered id of the command
 *
 * @param value either a command or a command identifier
 *
 * @returns id of the command
 */
export function getCommandId(value: object | CommandIdentifier): string {
    if (typeof value === 'string') {
        return value;
    }

    if (value && value.constructor && value.constructor['commandId']) {
        return value.constructor['commandId'];
    }

    if (value && value['commandId']) {
        return value['commandId'];
    }

    return null;
}
