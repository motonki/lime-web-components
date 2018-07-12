import { ServiceContainer } from "./service-container.interface";

// lib with functions that the platform can implement
// plugins will use this interface to make calls to the platform

export interface LimeWebComponentPlatform {
  type: "LimeCRMWebClient" | "LimeCRMDesktopClient";

  service: ServiceContainer;
}
