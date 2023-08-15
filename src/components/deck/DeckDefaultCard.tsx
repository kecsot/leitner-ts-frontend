import { DeckType } from "../../api/types"

type Props = {
    item: DeckType
}

export const DeckDefaultDetail = ({item}: Props) => {

    return (
        <>    
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>{item.createdAt.toISOString()}</div>
            <div>{item.updatedAt.toISOString()}</div>
        </>
    )
}
