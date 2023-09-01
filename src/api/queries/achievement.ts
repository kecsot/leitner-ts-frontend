import {useQuery, UseQueryResult} from "react-query"
import {AchievementType} from "../../@types/achievement.ts";
import {fetchAllAchievement} from "../achievement.ts";
import {UseQueryOptions} from "react-query/types/react/types";


export const ACHIEVEMENT_CARD_QUERY_KEYS = {
    list: (filters = {}) => ['achievement', 'list', {filters}],
    lists: ['achievement', 'list'],
    detail: (id: string) => ['achievement', 'detail', id],
    details: ['achievement', 'detail'],
}

export const useAchievementListQuery = (options?: UseQueryOptions<AchievementType[]>): UseQueryResult<AchievementType[]> => {

    return useQuery({
        queryKey: ACHIEVEMENT_CARD_QUERY_KEYS.list(),
        queryFn: () => fetchAllAchievement(),
        ...options
    })
}