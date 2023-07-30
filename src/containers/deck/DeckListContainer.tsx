
import { DeckCard } from "../../components/deck/DeckCard";
import { DeckType } from "../../types/deck";

export const DeckListContainer = () => {

    const fakeDecks: DeckType[] = [
        {
            id: 1,
            name: "Deck 1",
            description: "Description 1",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 2,
            name: "Deck 2",
            description: "Description 2",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: 3,
            name: "Deck 3",
            description: "Description 3",
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ];

    return (
        <>
            {fakeDecks.map((deck) => (
                <DeckCard key={deck.id} item={deck} />
            ))}
        </>
    )
}
