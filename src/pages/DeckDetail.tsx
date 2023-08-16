import {useParams} from "react-router-dom"
import {DeckDetailContainer} from "../containers/deck/DeckDetailContainer"
import {DeckCardListContainer} from "../containers/deck/DeckCardListContainer";
import Page404 from "./Page404.tsx";

const DeckDetail = () => {
    const {id} = useParams();

    if (!id) return <Page404/>;

    return (
        <>
            <DeckDetailContainer deckId={id}/>
            <DeckCardListContainer deckId={id}/>
        </>
    )
}

export default DeckDetail