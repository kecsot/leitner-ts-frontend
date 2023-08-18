import {useParams} from "react-router-dom"
import {DeckDetailContainer} from "../../../containers/deck/DeckDetailContainer.tsx"
import {DeckCardListContainer} from "../../../containers/card/DeckCardListContainer.tsx";
import Page404 from "../../Page404.tsx";
import {Container} from "@mui/material";
import {Helmet} from "react-helmet";

const DeckDetail = () => {
    const {id} = useParams();

    if (!id) return <Page404/>;

    return (
        <Container>
            <Helmet>
                <title>Deck detail</title>
            </Helmet>

            <DeckDetailContainer deckId={id}/>
            <DeckCardListContainer deckId={id}/>
        </Container>
    )
}

export default DeckDetail