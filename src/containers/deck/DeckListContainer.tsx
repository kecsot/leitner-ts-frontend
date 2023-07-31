import { DeckCard } from "../../components/deck/DeckCard";
import { useDeckListQuery } from "../../queries/deck";


export const DeckListContainer = () => {
    const {isLoading, error, data} = useDeckListQuery()

    // TODO: errorBoundary

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {data && data.data.map((deck) => (
                <DeckCard key={deck.id} item={deck} />
            ))}
        </>
    )
}
