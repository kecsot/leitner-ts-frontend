import { DeckType } from "../../api/types"

type Props = {
    item: DeckType
    onClick: () => void
}

export const DeckCard = ({item, onClick}: Props) => {

    return (
        <>    
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.description}</div>
            <button onClick={onClick}>View</button>
        </>
    )
}
