import Page404 from "../../pages/Page404.tsx";
import {useLeitnerSystemItemQuery} from "../../api/queries/leitner.ts";
import {LeitnerSystemLevelTimeline} from "../../components/leitner/LeitnerSystemLevelTimeline.tsx";
import {useBoxQuery} from "../../api/queries/box.ts";
import {LeitnerSystemLevelTimelineSkeleton} from "../../components/leitner/LeitnerSystemLevelTimelineSkeleton.tsx";

type Props = {
    boxId: number
}

export const BoxLeitnerSystemLevelTimelineContainer = ({boxId}: Props) => {

    const boxQuery = useBoxQuery(boxId, {useErrorBoundary: true})
    const leitnerSystemItemQuery = useLeitnerSystemItemQuery(boxId, {
        useErrorBoundary: true,
        enabled: !!boxQuery.data
    })

    if (boxQuery.isLoading || leitnerSystemItemQuery.isLoading) return <LeitnerSystemLevelTimelineSkeleton/>
    if (!boxQuery.data || !leitnerSystemItemQuery.data) return <Page404/>

    return <LeitnerSystemLevelTimeline item={leitnerSystemItemQuery.data}/>
}
