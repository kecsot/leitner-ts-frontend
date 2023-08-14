import { DeckType } from "../../api/types"
import { DeckCard } from "./DeckCard"

type Props = {
    items: DeckType[]
    onViewItem: (item: DeckType) => void
}

export const DeckList = ({ items, onViewItem: onItemView }: Props) => {

    return (
        <>
            {items.map((deck) => (
                <DeckCard
                    key={deck.id}
                    item={deck}
                    onClick={() => onItemView(deck)} />
            ))}
        </>
    )
}
