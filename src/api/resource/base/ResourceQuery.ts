import { Query as AppWriteQuery } from "appwrite";

type QueryTypesSingle = string | number | boolean;
export type QueryTypesList = string[] | number[] | boolean[];
export type QueryTypes = QueryTypesSingle | QueryTypesList;

export type ResourceQueryType = {
    query: string
};

/** 
 *  In our layer we dont use $. 
 *  So we have to swap back for appwrite. 
 */
const preprocessAttribute = (attribute: string): string => {
    const isNeedToDollarize = [
        'id',
        'updatedAt',
        'createdAt'
    ].includes(attribute);

    return isNeedToDollarize ? `$${attribute}` : attribute;
}

export const ResourceQuery = {
    equal: (attribute: string, value: QueryTypes): ResourceQueryType => ({ query: AppWriteQuery.equal(preprocessAttribute(attribute), value) }),

    notEqual: (attribute: string, value: QueryTypes): ResourceQueryType => ({ query: AppWriteQuery.notEqual(preprocessAttribute(attribute), value) }),

    lessThan: (attribute: string, value: QueryTypes): ResourceQueryType => ({ query: AppWriteQuery.lessThan(preprocessAttribute(attribute), value) }),

    lessThanEqual: (attribute: string, value: QueryTypes): ResourceQueryType => ({ query: AppWriteQuery.lessThanEqual(preprocessAttribute(attribute), value) }),

    greaterThan: (attribute: string, value: QueryTypes): ResourceQueryType => ({ query: AppWriteQuery.greaterThan(preprocessAttribute(attribute), value) }),

    search: (attribute: string, value: string): ResourceQueryType => ({ query: AppWriteQuery.search(preprocessAttribute(attribute), value) }),

    orderDesc: (attribute: string): ResourceQueryType => ({ query: AppWriteQuery.orderDesc(preprocessAttribute(attribute)) }),

    orderAsc: (attribute: string): ResourceQueryType => ({ query: AppWriteQuery.orderAsc(preprocessAttribute(attribute)) }),

    cursorAfter: (id: string): ResourceQueryType => ({ query: AppWriteQuery.cursorAfter(id) }),

    cursorBefore: (id: string): ResourceQueryType => ({ query: AppWriteQuery.cursorBefore(id) }),

    limit: (limit: number): ResourceQueryType => ({ query: AppWriteQuery.limit(limit) }),

    offset: (offset: number): ResourceQueryType => ({ query: AppWriteQuery.offset(offset) })
}