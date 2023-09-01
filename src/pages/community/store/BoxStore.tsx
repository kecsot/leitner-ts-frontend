import {Container} from "@mui/material";
import {Helmet} from "react-helmet";
import {BoxStoreListContainer} from "../../../containers/store/BoxStoreListContainer.tsx";


const BoxStore = () => {

    return (
        <Container>
            <Helmet>
                <title>BoxStore</title>
            </Helmet>

            <BoxStoreListContainer />
        </Container>
    )
}

export default BoxStore;