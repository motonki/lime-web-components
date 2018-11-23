import { TranslateService } from "./service/translate-service.interface";
import { HttpService } from "./service/http-service.interface";
import { RouteService } from "./service/route-service.interface";
import { NotificationService } from "./service/notification-service.interface";
import { ActionService } from "./service/action-service.interface";
import { StateService } from "./service/index";
import { LimeobjectsStateService } from "./service/state/limeobjects-service.interface";

// lib with functions that the platform can implement
// plugins will use this interface to make calls to the platform

export interface LimeWebComponentPlatform {
    type: "LimeCRMWebClient" | "LimeCRMDesktopClient";

    state: {
        limetypes: StateService;
        limeobjects: LimeobjectsStateService;
        application: StateService;
        configs: StateService;
    };

    translate: TranslateService;

    http: HttpService;

    route: RouteService;

    notifications: NotificationService;
    action?: ActionService;
}
