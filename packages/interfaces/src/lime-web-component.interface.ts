import { LimeWebComponentContext } from './lime-web-component-context.interface';
import { LimeWebComponentPlatform } from './lime-web-component-platform.interface';

/**
 * Interface that Lime Web Components must implement
 */
export interface LimeWebComponent {
    /**
     * Reference to the platform
     */
    platform: LimeWebComponentPlatform;

    /**
     * The context this component belongs to
     */
    context: LimeWebComponentContext;
}
