export interface Query {
    limetype: string;
    limit?: number;
    offset?: number;
    orderBy?: object[];
    filter?: Expression;
    responseFormat: {
        object?: object;
        aggregates?: object;
    };
}

export interface Expression {
    key?: string;
    op: Operator;
    exp: any;
    type?: 'filter'
}

export enum Operator {
    AND = 'AND',
    OR = 'OR',
    EQUALS = '=',
    NOT = '!',
    GREATER = '>',
    LESS = '<',
    IN = 'IN',
    BEGINS = '=?',
    LIKE = '?',
    LESS_OR_EQUAL = '<=',
    GREATER_OR_EQUAL = '>='
}
