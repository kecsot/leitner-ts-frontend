import {LoadingProgressBar} from "../../components/base/LoadingProgressBar";
import {DeckDefaultDetail} from "../../components/deck/DeckDefaultCard";
import {useDeckQuery} from "../../api/queries/deck";
import Page404 from "../../pages/Page404.tsx";

type Props = {
    deckId: number
}

export const DeckDetailContainer = ({deckId}: Props) => {
    const {isLoading, data} = useDeckQuery(deckId, {useErrorBoundary: true})

    if (isLoading) return <LoadingProgressBar/>
    if (!data) return <Page404/>

    return <DeckDefaultDetail item={data}/>
}
