import { LimeWebComponentPlatform } from "./lime-web-component-platform.interface";

/**
 * Interface that Lime web components must implement
 */
export interface LimeWebComponent {
  /**
   * Reference to the platform
   */
  platform: LimeWebComponentPlatform;

  /**
   * Reference to the root DOM element of the web component
   */
  element: HTMLElement;
}
