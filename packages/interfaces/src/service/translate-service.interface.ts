/**
 * Service for translating strings into different languages
 */
export interface TranslateService {

    /**
     * Get a translated string by ID
     *
     * @param {string} id id of the translation
     * @param {object} params any parameters that the translation might require
     *
     * @returns {string} the translation
     */
    get(id: string, params?: object): string;
}
