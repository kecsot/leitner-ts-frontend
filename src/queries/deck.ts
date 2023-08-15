import { useQuery } from "react-query"
import { useDeckResource } from "../api/resource"
import { ResourceQueryType } from "../api/resource/base/ResourceQuery"


export const useDeckQuery = (deckId: string) => {
    const { getItem } = useDeckResource()
    return useQuery(['decks', 'detail', deckId], () => getItem(deckId))
}

export const useDeckListQuery = (queries?: ResourceQueryType[]) => {
    const { getAllItems } = useDeckResource()
    return useQuery(['decks', 'list', queries], () => getAllItems(queries))
}