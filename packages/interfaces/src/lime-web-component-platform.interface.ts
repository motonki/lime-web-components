import { HttpService } from './service/http-service.interface';
import {
    CommandBusService,
    DialogService,
    EventDispatcherService,
    QueryService,
    StateService,
    TaskService,
} from './service/index';
import { NotificationService } from './service/notification-service.interface';
import { RouteService } from './service/route-service.interface';
import { LimeobjectsStateService } from './service/state/limeobjects-service.interface';
import { TranslateService } from './service/translate-service.interface';

// lib with functions that the platform can implement
// plugins will use this interface to make calls to the platform

export interface LimeWebComponentPlatform {
    type: 'LimeCRMWebClient' | 'LimeCRMDesktopClient';

    state: {
        limetypes: StateService;
        limeobjects: LimeobjectsStateService;
        application: StateService;
        configs: StateService;
        filters: StateService;
        device: StateService;
        tasks: TaskService;
    };

    translate: TranslateService;

    http: HttpService;

    route: RouteService;

    notifications: NotificationService;

    query: QueryService;

    commandBus: CommandBusService;

    dialog: DialogService;

    eventDispatcher: EventDispatcherService;
}
