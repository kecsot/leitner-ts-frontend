
import { useEffect, useState } from "react";
import { useDeckResource } from "../../api/resource";
import { DeckType } from "../../api/types";
import { DeckCard } from "../../components/deck/DeckCard";
import { ResourceQuery } from "../../api/resource/base/ResourceQuery";


export const DeckListContainer = () => {

    const [decks, setDecks] = useState<DeckType[]>([])
    const {getAllItems}  = useDeckResource()

    // TODO useQuery
    useEffect(() => {
        getAllItems([ResourceQuery.orderAsc('id')]).then((items) => {
            setDecks(items.data)
            console.log(items.data)
        })  
    }, [])

    return (
        <>
            {decks && decks.map((deck) => (
                <DeckCard key={deck.id} item={deck} />
            ))}
        </>
    )
}
