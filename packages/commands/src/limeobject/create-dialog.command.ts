import { Command, Limetype } from '@limetech/lime-web-components-interfaces';

/**
 * Open a dialog for creating a new limeobject
 *
 * @id `limeobject.create-dialog`
 */
@Command({
    id: 'limeobject.create-dialog',
})
export class CreateLimeobjectDialogCommand {
    /**
     * The limetype of the object to create
     */
    public limetype: Limetype;

    /**
     * Default data to populate the form with
     */
    public limeobject?: any;
}
