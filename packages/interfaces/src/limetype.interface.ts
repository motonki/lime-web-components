export interface Limetype {
    name: string;
    label: string;
    acl: Acl;
    localname: {
        singular: string;
        plural: string;
    };
    properties: Properties;
    [key: string]: any;
}

export interface Limetypes {
    [name: string]: Limetype;
}

export interface Property {
    acl: Acl;
    defaultvalue: any;
    fieldorder: number;
    has_sql?: boolean;
    label: string;
    localname: string;
    name: string;
    required: boolean;
    type: PropertyType;
    options?: Array<{
        key: string;
        inactive: boolean;
        text: string;
        order?: number;
        id?: number;
    }>;
    relation?: {
        getLimetype: () => Limetype;
        getBackreference: () => Property;
    };
}

export interface Properties {
    [name: string]: Property;
}

export type PropertyType =
    | 'string'
    | 'text'
    | 'phone'
    | 'integer'
    | 'decimal'
    | 'percent'
    | 'time'
    | 'date'
    | 'year'
    | 'quarter'
    | 'month'
    | 'yesno'
    | 'link'
    | 'user'
    | 'xml'
    | 'option'
    | 'set'
    | 'file'
    | 'hasone'
    | 'hasmany'
    | 'belongsto'
    | 'hasandbelongstomany'
    | 'system';

export interface Acl {
    delete: boolean;
    read: boolean;
    update: boolean;
    create: boolean;
}

export function isRelation(property: Property) {
    const propTypes: PropertyType[] = [
        'belongsto',
        'hasone',
        'hasmany',
        'hasandbelongstomany',
    ];
    return property && propTypes.includes(property.type);
}

export function isSingleRelation(property: Property) {
    const propTypes: PropertyType[] = ['belongsto', 'hasone'];
    return property && propTypes.includes(property.type);
}

export function isDate(property: Property) {
    const propTypes: PropertyType[] = [
        'time',
        'date',
        'year',
        'quarter',
        'month',
    ];
    return property && propTypes.includes(property.type);
}

export function isString(property: Property) {
    const propTypes: PropertyType[] = ['string', 'text', 'phone', 'link'];
    return property && propTypes.includes(property.type);
}

export function isFloat(property: Property) {
    const propTypes: PropertyType[] = ['decimal', 'percent'];
    return property && propTypes.includes(property.type);
}
