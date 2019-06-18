import { StateService } from './state-service.interface';

/**
 * Service for creating background tasks
 */
export interface TaskService extends StateService {
    /**
     * Create a new background task
     *
     * @param url url to the resource that will create the task
     * @param data task specific data
     * @param cancelAction true to allow task creation to be cancelled
     * @param message notification message to display before the task is created instead of the default one
     *
     * @returns a promise that resolves to the id of the task if it was created successfully
     */
    create(
        url: string,
        data: any,
        cancelAction?: boolean,
        message?: string
    ): Promise<string | void>;

    /**
     * Get status about specific tasks
     *
     * @param ids the ids of the tasks to check
     *
     * @returns a promise that resolves to the status about the tasks
     */
    getStatus(ids: string[]): Promise<TaskStatus[]>;
}

export enum TaskState {
    /**
     * Task state is unknown
     */
    Pending = 'PENDING',

    /**
     * Task was started by a worker
     */
    Started = 'STARTED',

    /**
     * Task is waiting for retry
     */
    Retry = 'RETRY',

    /**
     * Task succeeded
     */
    Success = 'SUCCESS',

    /**
     * Task failed
     */
    Failure = 'FAILURE',
}

export interface TaskStatus {
    /**
     * ID of the task
     */
    id: string;

    /**
     * The state of the task
     */
    status: TaskState;

    /**
     * The result of the task once it has finished its execution
     */
    result?: string;
}
