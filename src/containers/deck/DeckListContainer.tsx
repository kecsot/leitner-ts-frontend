
import { useDeckResource } from "../../api/resource";
import { DeckCard } from "../../components/deck/DeckCard";
import { useQuery } from "react-query";


export const DeckListContainer = () => {
    const {getAllItems}  = useDeckResource()
    const {isLoading, error, data} = useQuery('decks', () => getAllItems())

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
