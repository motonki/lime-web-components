import { Expression } from "../query.interface";

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
     * NOTE: At the moment, the table view might not be able to display what filters are applied correctly if the
     * expression contains anything that can not be directly mapped to a column filter. The table will display the
     * correct filtered selection of data, but there will be no indication of what is actually displayed to the user
     * if a complex filter expression with AND/OR groupings are used.
     *
     * @param {string} limetype the limetype of the table to route to
     * @param {Expression} filter filter expression to apply to the table
     * @param {string} origin of the navigate call e.g. the plugin name, used for tracking user data
     */
    table(limetype: string, filter?: Expression, origin?: string);
}
