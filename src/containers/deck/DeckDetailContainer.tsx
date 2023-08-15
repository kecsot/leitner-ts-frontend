import { LoadingProgressBar } from "../../components/base/LoadingProgressBar";
import { DeckDefaultDetail } from "../../components/deck/DeckDefaultCard";
import { useDeckQuery } from "../../queries/deck";

type Props = {
    deckId: string
}

export const DeckDetailContainer = ({ deckId }: Props) => {
    const { isLoading, error, data } = useDeckQuery(deckId)

    return (
        <>
            <LoadingProgressBar isLoading={isLoading} />
            {data && <DeckDefaultDetail item={data} />}
        </>
    )
}
