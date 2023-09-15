import {useQuery, UseQueryResult} from "react-query"
import {AchievementType} from "../../@types/achievement.ts";
import {fetchAllAchievement} from "../achievement.ts";
import {UseQueryOptions} from "react-query/types/react/types";


export const ACHIEVEMENT_CARD_QUERY_KEYS = {
    key: 'achievement' as const,

    list: (filters = {}) => [ACHIEVEMENT_CARD_QUERY_KEYS.key, 'list', {filters}],
    lists: () => [ACHIEVEMENT_CARD_QUERY_KEYS.key, 'list'],
    detail: (id: string) => [ACHIEVEMENT_CARD_QUERY_KEYS.key, 'detail', id],
    details: () => [ACHIEVEMENT_CARD_QUERY_KEYS.key, 'detail'],
}

export const useAchievementListQuery = (options?: UseQueryOptions<AchievementType[]>): UseQueryResult<AchievementType[]> => {

    return useQuery({
        queryKey: ACHIEVEMENT_CARD_QUERY_KEYS.list(),
        queryFn: () => fetchAllAchievement(),
        ...options
    })
}