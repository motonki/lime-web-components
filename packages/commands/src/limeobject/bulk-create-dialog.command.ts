import {
    Command,
    Expression,
    Limetype,
} from '@limetech/lime-web-components-interfaces';

/**
 * Open a dialog for bulk creating limeobjects
 *
 * ### Flow example
 * Let's have a look at the general flow by going through the concrete example of adding several persons to a marketing activity:
 * - Go to the table view of persons.
 * - Filter everyone who should be included in the marketing activity.
 * - Select 'Bulk create objects' form the action menu.
 * - Select marketing activity as type of content.
 * - Fill out the rest of the form and click 'create'.
 * - A toast message appears and gives you 5 seconds to undo the action before it creates the corresponding task.
 * - Another toast message will inform you after the task is completed.
 * - If the task ended successful you can go to the participant table view and check the result.
 *
 * ### Configuration
 * In order to activate the feature go to a table configuration in lime-admin to the limetype you want to bulk create from
 * and add the following configuration:
 *
 * ```json
 * "actions": [
 * {
 *      "id": "limeobject.bulk-create-dialog",
 *      "params": {
 *        "relations": [<LIST OF CREATABLE, RELATED FIELDS (AS STRINGS)>]
 *      }
 *    }
 * ],
 * ```
 *
 * @id `limeobject.bulk-create-dialog`
 */
@Command({
    id: 'limeobject.bulk-create-dialog',
})
export class BulkCreateDialogCommand {
    /**
     * The limetype of the objects to create new objects from
     */
    public limetype: Limetype;

    /**
     * A query describing what limeobjects to create new limeobjects from. Each object from the result will result in a
     * new related limeobject to be created
     */
    public filter: Expression;

    /**
     * A list of relation names that are possible to create from the limetype
     */
    public relations: string[] = [];
}
