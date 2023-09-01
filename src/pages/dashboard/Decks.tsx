import {Container, Stack} from "@mui/material";
import {DeckListContainer} from "../../containers/deck/DeckListContainer.tsx";
import {Helmet} from "react-helmet";

const Decks = () => {

    return (
        <Container>
            <Helmet>
                <title>Decks</title>
            </Helmet>

            <Stack spacing={2}>
                <DeckListContainer/>
            </Stack>
        </Container>
    )
}

export default Decks