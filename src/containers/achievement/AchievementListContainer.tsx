import Page404 from "../../pages/Page404.tsx";
import {useAchievementListQuery} from "../../api/queries/achievement.ts";
import {AchievementList} from "../../components/achievement/AchievementList.tsx";


export const AchievementListContainer = () => {
    const {
        data
    } = useAchievementListQuery({
        suspense: true,
        useErrorBoundary: true
    });

    if (!data) return <Page404/>

    return (
        <AchievementList
            achievements={data}/>
    )
}
