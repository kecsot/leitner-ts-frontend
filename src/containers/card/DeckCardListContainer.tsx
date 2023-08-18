import {LoadingProgressBar} from "../../components/base/LoadingProgressBar.tsx";
import {useCardListQuery} from "../../queries/card.ts";
import {ResourceQuery} from "../../api/resource/base/ResourceQuery.ts";
import {useErrorBoundary} from "react-error-boundary";
import Page404 from "../../pages/Page404.tsx";
import {CardList} from "../../components/card/CardList.tsx";

type Props = {
    deckId: string
}

export const DeckCardListContainer = ({deckId}: Props) => {
    const {showBoundary} = useErrorBoundary()
    const {isLoading, isError, error, data} = useCardListQuery([ResourceQuery.equal('deckId', deckId)]);

    if (isLoading) return <LoadingProgressBar/>
    if (isError) showBoundary(error)
    if (!data) return <Page404/>

    return (
        <CardList items={data.data}/>
    )
}
