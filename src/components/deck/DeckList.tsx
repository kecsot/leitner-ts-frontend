import { DeckType } from "../../api/types"
import { DeckListItem } from "./DeckListItem"

type Props = {
    items: DeckType[]
    onViewItem: (item: DeckType) => void
}

export const DeckList = ({ items, onViewItem: onItemView }: Props) => {

    return (
        <>
            {items.map((deck) => (
                <DeckListItem
                    key={deck.id}
                    item={deck}
                    onClick={() => onItemView(deck)} />
            ))}
        </>
    )
}
