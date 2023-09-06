import {Pagination, PaginationRequestParams} from "../../@types/base.ts";
import {UseQueryOptions} from "react-query/types/react/types";
import {useQuery} from "react-query";
import {fetchAllLeitnerSystem, fetchLeitnerSystemList} from "../leitner.ts";
import {LeitnerSystemType} from "../../@types/leitner.ts";


export const LEITNER_SYSTEM_QUERY_KEYS = {
    key: 'leitner-system' as const,

    list: (filters = {}) => [LEITNER_SYSTEM_QUERY_KEYS.key, 'list', {filters}] as const,
    lists: () => [LEITNER_SYSTEM_QUERY_KEYS.key, 'list'] as const,
}

export const useAllLeitnerSystemQuery = (options?: UseQueryOptions<LeitnerSystemType[]>) => useQuery({
    queryKey: LEITNER_SYSTEM_QUERY_KEYS.list(),
    queryFn: fetchAllLeitnerSystem,
    ...options
})

export const useLeitnerSystemListQuery = (params: PaginationRequestParams, options?: UseQueryOptions<Pagination<LeitnerSystemType>>) => {
    return useQuery({
        queryKey: LEITNER_SYSTEM_QUERY_KEYS.list(params),
        queryFn: () => fetchLeitnerSystemList(params).then((data) => data as Pagination<LeitnerSystemType>),
        ...options
    })
}