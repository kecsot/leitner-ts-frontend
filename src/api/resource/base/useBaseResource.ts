import { ID, Models } from "appwrite";

import { ResourceQuery, ResourceQueryType } from "./ResourceQuery";
import { BaseList, BaseType, IBaseModel } from "../../types";
import { databases } from "../../appwrite";


export const useBaseResource = <B extends IBaseModel, T extends BaseType> (collectionId: string) => {
    const databaseId = import.meta.env.VITE_APPWRITE_DATABASE || ''
 
    const convertDataModelToType = (item: Models.Document): T => {
        const {$id, $createdAt, $updatedAt, $collectionId, $databaseId, $permissions, ...rest} = item;

        const baseType = {
            id: $id,
            createdAt: new Date($createdAt),
            updatedAt: new Date($updatedAt),
        } as BaseType

        return {
            ...baseType,
            ...rest
        } as T
    }
    
    /**
     * @issue https://stackoverflow.com/questions/43909566/get-keys-of-a-typescript-interface-as-array-of-strings
     * Would be nice some dinamically solution without 3rd party dependency
     * 
     * @param item 
     * @returns 
     */
    const removeBaseTypeKeys = (item: T) =>{
        const {id, createdAt, updatedAt, ...rest} = item;
        return rest;
    }

    const getList = (page: number = 0, limit: number = 25, queries: ResourceQueryType[] = []): Promise<BaseList<T>> =>{
        let queryStrings = [
            ...queries,
            ResourceQuery.offset(page * limit),
            ResourceQuery.limit(limit),
        ].map((item: ResourceQueryType) => {
            return item.query;
        })

        return databases.listDocuments(
            databaseId,
            collectionId,
            queryStrings
        ).then((response: Models.DocumentList<Models.Document>) => {
            return {
                total: response.total,
                data: response.documents.map((x) => convertDataModelToType(x))
            } as BaseList<T>;
        })
    }

    const getAllItems = (queries: ResourceQueryType[] = []): Promise<BaseList<T>> => {
        let result = [] as T[];
        let page = 0;
        let limit = 100;

        return new Promise((resolve, reject) => {
            let getItems = () => {
                getList(page, limit, queries).then((response) => {
                    result.push(...response.data);
                    if (response.total !== result.length)  {
                        page++;
                        getItems();
                    } else {
                        resolve({
                            total: result.length,
                            data: result
                        } as BaseList<T>);
                    }
                }).catch((error: any) => {
                    reject(error);
                })
            }
            getItems();
        })
    }

    const countItems = (queries: ResourceQueryType[] = []): Promise<number> => {
        let queryStrings = [
            ...queries,
            ResourceQuery.limit(0),
        ].map((item: ResourceQueryType) => {
            return item.query;
        })

        return databases.listDocuments(
            databaseId,
            collectionId,
            queryStrings
        ).then((response: Models.DocumentList<Models.Document>) => {
            return response.total;
        })
    }

    const createItem = (item: B): Promise<T> =>{
        return databases.createDocument(
            databaseId,
            collectionId,
            ID.unique(),
            item,
        ).then((response: Models.Document) => {
            return convertDataModelToType(response);
        })
    }

    const getItem = (id: string): Promise<T> =>{
        return databases.getDocument(
            databaseId,
            collectionId,
            id
        ).then((response: Models.Document) => {
            return convertDataModelToType(response);
        })
    }

    const updateItem = (item: T): Promise<T> => {
        const data = removeBaseTypeKeys(item)

        return databases.updateDocument(
            databaseId,
            collectionId,
            item.id,
            {
                ...data,
                $id: item.id,
            }
        ).then((response: Models.Document) => {
            return convertDataModelToType(response);
        })
    }

    const deleteItem = (id: string): Promise<boolean> => {
        return databases.deleteDocument(
            databaseId,
            collectionId,
            id
        ).then(() => {
            return true
        })
    }

    return {
        getList,
        getAllItems,
        countItems,
        createItem,
        getItem,
        updateItem,
        deleteItem
    }
}