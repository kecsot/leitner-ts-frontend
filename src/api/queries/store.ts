import {BaseType, Pagination} from "../../@types/base.ts";
import {UseQueryOptions} from "react-query/types/react/types";
import {useQuery} from "react-query";
import {fetchStoreItemList} from "../store.ts";
import {StoreItemType, StorePaginationRequestParams} from "../../@types/store.ts";

export const STORE_QUERY_KEYS = {
    list: (type: string, filters = {}) => ['store', 'list', type, {filters}],
    lists: ['store', 'list'],
}

export const useStoreItemListQuery = <T extends BaseType>(params: StorePaginationRequestParams, options?: UseQueryOptions<Pagination<StoreItemType<T>>>) => {
    const {type, ...rest} = params;

    return useQuery({
        queryKey: STORE_QUERY_KEYS.list(type, rest),
        queryFn: () => fetchStoreItemList(params).then((data) => data as Pagination<StoreItemType<T>>),
        ...options
    })
}