import {BoxDetailCard} from "../../components/box/BoxDetailCard.tsx";
import {useBoxQuery} from "../../api/queries/box.ts";
import Page404 from "../../pages/Page404.tsx";
import {BoxDetailCardSkeleton} from "../../components/box/BoxDetailCardSkeleton.tsx";

type Props = {
    boxId: number
}

export const BoxDetailCardContainer = ({boxId}: Props) => {
    const {isLoading, data} = useBoxQuery(boxId, {useErrorBoundary: true})

    if (isLoading) return <BoxDetailCardSkeleton/>
    if (!data) return <Page404/>

    return <BoxDetailCard item={data}/>
}
