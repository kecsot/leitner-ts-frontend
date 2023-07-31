import { useQuery } from "react-query"
import { useDeckResource } from "../api/resource"
import { ResourceQueryType } from "../api/resource/base/ResourceQuery"

export const useDeckListQuery = (queries?: ResourceQueryType[]) => {
    const { getAllItems } = useDeckResource()
    return useQuery(['decks'], () => getAllItems(queries))
}