/**
 * Service for routing
 */
export interface RouteService {
    /**
     * Navigate to a predefined route
     */
    dashboard();

    /**
     * @param {string} limetype the limetype of the object to route to
     * @param {number} id the id of the limeobject to route to
     */
    limeObject(limetype: string, id: number);

    /**
     * @param {string} limetype the limetype of the table to route to
     */
    table(limetype: string);
}
