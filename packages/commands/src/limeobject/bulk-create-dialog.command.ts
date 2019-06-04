import {
    Command,
    Expression,
    Limetype,
} from '@limetech/lime-web-components-interfaces';

/**
 * Open a dialog for bulk creating limeobjects
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
