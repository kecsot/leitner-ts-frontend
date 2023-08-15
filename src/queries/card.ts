import { useQuery } from "react-query"
import { ResourceQueryType } from "../api/resource/base/ResourceQuery"
import { useCardResource } from "../api/resource"


export const CARD_QUERY_KEYS = {
    list: (queries?: ResourceQueryType[]) => ['cards', 'list', queries],
    lists: ['cards', 'list'],
    detail: (id: string) => ['cards', 'detail', id],
    details: ['cards', 'detail'],
}

export const useCardListQuery = (queries?: ResourceQueryType[]) => {
    const { getAllItems } = useCardResource()

    return useQuery({
        queryKey: CARD_QUERY_KEYS.list(queries),
        queryFn: () => getAllItems(queries),
    })
}