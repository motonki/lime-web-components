import { StateService } from "../state-service.interface";

export interface LimeobjectsStateService extends StateService {

    /**
     * Load the specified limeobject into the state
     *
     * @param {string} limetype
     * @param {number} id
     */
    loadObject(limetype: string, id: number): void;
}
