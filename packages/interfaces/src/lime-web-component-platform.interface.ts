/**
 * Service container for the Lime CRM platform
 */
export interface LimeWebComponentPlatform {
    type: 'LimeCRMWebClient' | 'LimeCRMDesktopClient';

    /**
     * Get a service
     *
     * @param name the name of the service
     */
    get(name: PlatformServiceName | string): any;

    /**
     * Check if a service is currently registered on the platform
     *
     * @param name the name of the service
     */
    has(name: PlatformServiceName | string): boolean;

    /**
     * Register a service on the platform
     *
     * Core platform service names are defined by the enum `PlatformServiceName`. Third parties that wants to register
     * a service should add a prefix to the service name, e.g. the plugin name.
     *
     * @param name the name of the service
     * @param service the service
     */
    register(name: PlatformServiceName | string, service: any): void;
}

/**
 * Core platform service names
 */
export enum PlatformServiceName {
    Translate = 'translate',
    Http = 'http',
    Route = 'route',
    Notification = 'notifications',
    Query = 'query',
    CommandBus = 'commandBus',
    Dialog = 'dialog',
    EventDispatcher = 'eventDispatcher',

    LimetypesState = 'state.limetypes',
    LimeobjectsState = 'state.limeobjects',
    ApplicationState = 'state.application',
    ConfigsState = 'state.configs',
    FiltersState = 'state.filters',
    DeviceState = 'state.device',
    TaskState = 'state.tasks',
}
