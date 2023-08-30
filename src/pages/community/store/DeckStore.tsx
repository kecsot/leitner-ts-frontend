import {Container} from "@mui/material";
import {Helmet} from "react-helmet";
import {DeckStoreListContainer} from "../../../containers/store/DeckStoreListContainer.tsx";


const DeckStore = () => {

    return (
        <Container>
            <Helmet>
                <title>DeckStore</title>
            </Helmet>

            <DeckStoreListContainer />
        </Container>
    )
}

export default DeckStore;