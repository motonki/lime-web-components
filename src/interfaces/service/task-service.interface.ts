import { StateService } from './state-service.interface';

/**
 * Service for creating background tasks
 */
export interface TaskService extends StateService {

    /**
     * Create a new background task
     * @param url url to the resource that will create the task
     * @param data task specific data
     * @param cancelAction true to allow task creation to be cancelled
     * @param message override for the default notification message
     */
    create(url: string, data: any, cancelAction: boolean, message?: string);
}
