import {LoadingProgressBar} from "../../components/base/progressBar/LoadingProgressBar.tsx";
import {BoxDefaultDetail} from "../../components/box/BoxDefaultCard.tsx";
import {useBoxQuery} from "../../api/queries/box.ts";
import Page404 from "../../pages/Page404.tsx";

type Props = {
    boxId: number
}

export const BoxDetailContainer = ({boxId}: Props) => {
    const {isLoading, data} = useBoxQuery(boxId, {useErrorBoundary: true})

    if (isLoading) return <LoadingProgressBar/>
    if (!data) return <Page404/>

    return <BoxDefaultDetail item={data}/>
}
