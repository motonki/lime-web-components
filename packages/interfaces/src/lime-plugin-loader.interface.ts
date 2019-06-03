import { LimeWebComponent } from './lime-web-component.interface';

/**
 * Interface for the loader component that is loaded when the app starts
 */
export interface LimePluginLoader extends LimeWebComponent {
    /**
     * Do any initializations required for the plugin in this method
     */
    componentWillLoad(): void | Promise<any>;

    /**
     * This method will never be called since the component will live
     * during the whole lifespan of the application. It must still be
     * present on the component though.
     */
    componentDidUnload(): void | Promise<any>;
}
