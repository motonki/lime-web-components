import { StateService } from './state-service.interface';

/**
 * Service for creating background tasks
 */
export interface TaskService extends StateService {

    /**
     * Create a new background task
     * @param url url to the resource that will create the task
     * @param data task specific data
     */
    create(url: string, data: any);
}
