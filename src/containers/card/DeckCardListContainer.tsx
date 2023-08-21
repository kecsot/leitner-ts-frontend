import {LoadingProgressBar} from "../../components/base/LoadingProgressBar.tsx";
import {useDeckCardListQuery} from "../../api/queries/deckCard.ts";
import {useErrorBoundary} from "react-error-boundary";
import Page404 from "../../pages/Page404.tsx";
import {CardList} from "../../components/card/CardList.tsx";

type Props = {
    deckId: number
}

export const DeckCardListContainer = ({deckId}: Props) => {
    const {showBoundary} = useErrorBoundary()
    const {isLoading, isError, error, data} = useDeckCardListQuery(deckId);

    if (isLoading) return <LoadingProgressBar/>
    if (isError) showBoundary(error)
    if (!data) return <Page404/>

    return (
        <CardList items={data}/>
    )
}
