import Page404 from "../../pages/Page404.tsx";
import {useAchievementListQuery} from "../../api/queries/achievement.ts";
import {AchievementStatistics} from "../../components/achievement/AchievementStatistics.tsx";


export const AchievementStatisticsContainer = () => {
    const {
        data
    } = useAchievementListQuery({
        suspense: true,
        useErrorBoundary: true
    });

    if (!data) return <Page404/>

    return (
        <AchievementStatistics
            achievements={data}/>
    )
}
