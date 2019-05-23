import { LimeWebComponentPlatform } from "./lime-web-component-platform.interface";
import { LimeWebComponentContext } from "./lime-web-component-context.interface";

/**
 * Interface that Lime web components must implement
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
