import { useParams } from "react-router-dom"
import { DeckDetailContainer } from "../containers/deck/DeckDetailContainer"


const DeckDetail = () => {
    const { id } = useParams();

    return (
        <DeckDetailContainer deckId={id!!}/>
    )
}

export default DeckDetail