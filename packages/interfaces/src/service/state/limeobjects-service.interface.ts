import { StateService } from '../state-service.interface';

export interface LimeobjectsStateService extends StateService {
    /**
     * Load the specified limeobject into the state
     *
     * @param {string} limetype
     * @param {number} id
     */
    loadObject(limetype: string, id: number): void;

    /**
     * Reload the specified limeobject and update corresponding views in the webclient
     *
     * NOTE: This is just a temporary method that can be used to get around some quirks in the current version of the
     * webclient. It is deprecated and code should not rely on its existance. Check if the method exists before using
     * it to make code backwards compatible, e.g. `limeobjects.reload && limeobjects.reload('company', 1001)`
     *
     * Once the quirks in the webclient have been fixed, there should be no need for this method and objects should
     * update themselves automatically.
     *
     * @deprecated
     */
    reloadObject?(limetype: string, id: number): void;
}
