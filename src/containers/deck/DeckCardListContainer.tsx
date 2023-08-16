import {LoadingProgressBar} from "../../components/base/LoadingProgressBar";
import {useCardListQuery} from "../../queries/card";
import {ResourceQuery} from "../../api/resource/base/ResourceQuery";
import {useErrorBoundary} from "react-error-boundary";
import Page404 from "../../pages/Page404.tsx";

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
        <div>
            {data.data.map((card) => (
                <div key={card.id}>
                    <div>{card.id}</div>
                    <div>{card.text}</div>
                </div>
            ))}
        </div>
    )
}
