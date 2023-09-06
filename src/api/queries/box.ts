import {useMutation, useQuery, useQueryClient} from "react-query"
import {fetchBox, fetchBoxList, postBox, patchBox} from "../box.ts";
import {BoxType} from "../../@types/box.ts";
import {Pagination, PaginationRequestParams} from "../../@types/base.ts";
import {UseQueryOptions} from "react-query/types/react/types";

export const BOX_QUERY_KEYS = {
    key: 'boxes' as const,

    list: (filters = {}) => [BOX_QUERY_KEYS.key, 'list', {filters}],
    lists: () => [BOX_QUERY_KEYS.key, 'list'],
    detail: (id: number) => [BOX_QUERY_KEYS.key, 'detail', id],
    details: () => [BOX_QUERY_KEYS.key, 'detail'],
}

export const useBoxQuery = (boxId: number, options?: UseQueryOptions<BoxType>) => useQuery({
    queryKey: BOX_QUERY_KEYS.detail(boxId),
    queryFn: () => fetchBox(boxId),
    ...options
})

export const useBoxListQuery = (params: PaginationRequestParams, options?: UseQueryOptions<Pagination<BoxType>>) => {
    return useQuery({
        queryKey: BOX_QUERY_KEYS.list(params),
        queryFn: () => fetchBoxList(params).then((data) => data as Pagination<BoxType>),
        ...options
    })
}

export const useBoxCreateMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: postBox,
        onSuccess: async (data) => {
            queryClient.setQueryData(BOX_QUERY_KEYS.detail(data.id), data)
            await queryClient.invalidateQueries(BOX_QUERY_KEYS.lists())
        }
    })
}

export const useBoxUpdateMutation = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: patchBox,
        onSuccess: async (data) => {
            queryClient.setQueryData(BOX_QUERY_KEYS.detail(data.id), data)
            await queryClient.invalidateQueries(BOX_QUERY_KEYS.lists())
        }
    })
}