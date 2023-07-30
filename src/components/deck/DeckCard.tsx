import { DeckType } from "../../types/deck"


type Props = {
    item: DeckType
}

export const DeckCard = ({item}: Props) => {

    return (
        <>    
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>{item.numberOfCards}</div>
        </>
    )
}
