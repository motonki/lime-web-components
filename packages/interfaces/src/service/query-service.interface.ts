import { Query, QueryResponse } from "../query.interface";

/**
 * Service for executing queries using the query objects API
 */
export interface QueryService {

    /**
     * Execute a query
     *
     * @param query
     */
    execute(query: Query): Promise<QueryResponse>;
}
