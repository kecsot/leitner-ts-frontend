import Page404 from "../../pages/Page404.tsx";
import {LoadingProgressBar} from "../../components/base/LoadingProgressBar.tsx";
import {useAchievementListQuery} from "../../api/queries/achievement.ts";
import {AchievementList} from "../../components/achievement/AchievementList.tsx";


export const AchievementListContainer = () => {
    const {isLoading, data} = useAchievementListQuery({useErrorBoundary: true});

    if (isLoading) return <LoadingProgressBar/>
    if (!data) return <Page404/>

    return (
        <AchievementList
            achievements={data}/>
    )
}
