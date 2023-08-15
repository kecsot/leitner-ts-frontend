import { useQuery, useQueryClient } from "react-query"
import { useDeckResource } from "../api/resource"
import { ResourceQueryType } from "../api/resource/base/ResourceQuery"

export const DECK_QUERY_KEYS = {
    list: (queries?: ResourceQueryType[]) => ['decks', 'list', queries],
    lists: ['decks', 'list'],
    detail: (id: string) => ['decks', 'detail', id],
    details: ['decks', 'detail'],
}

export const useDeckQuery = (deckId: string) => {
    const { getItem } = useDeckResource()
    return useQuery({
        queryKey: DECK_QUERY_KEYS.detail(deckId),
        queryFn: () => getItem(deckId)
    })
}

export const useDeckListQuery = (queries?: ResourceQueryType[]) => {
    const { getAllItems } = useDeckResource()
    const queryClient = useQueryClient()

    return useQuery({
        queryKey: DECK_QUERY_KEYS.list(queries),
        queryFn: () => getAllItems(queries),
        onSuccess: (data) => {
            data?.data.forEach((deck) => {
                queryClient.setQueryData(DECK_QUERY_KEYS.detail(deck.id), deck)
            })
        }
    })
}