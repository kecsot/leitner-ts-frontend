import {LoadingProgressBar} from "../../components/base/LoadingProgressBar";
import {DeckDefaultDetail} from "../../components/deck/DeckDefaultCard";
import {useDeckQuery} from "../../queries/deck";
import Page404 from "../../pages/Page404.tsx";
import {useErrorBoundary} from "react-error-boundary";

type Props = {
    deckId: string
}

export const DeckDetailContainer = ({deckId}: Props) => {
    const {showBoundary} = useErrorBoundary()

    const {isLoading, isError, error, data} = useDeckQuery(deckId)

    if (isLoading) return <LoadingProgressBar/>
    if (isError) showBoundary(error)
    if (!data) return <Page404/>

    return <DeckDefaultDetail item={data}/>
}
