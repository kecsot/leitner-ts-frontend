import { DeckType } from "../../api/types"

type Props = {
    item: DeckType
    onClick: () => void
}

export const DeckListItem = ({item, onClick}: Props) => {

    return (
        <>    
            <div>{item.name}</div>
            <div>{item.description}</div>
            <button onClick={onClick}>View</button>
        </>
    )
}
