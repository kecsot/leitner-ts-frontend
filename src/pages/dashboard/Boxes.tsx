import {Container, Stack} from "@mui/material";
import {BoxListContainer} from "../../containers/box/BoxListContainer.tsx";
import {Helmet} from "react-helmet";

const Boxes = () => {

    return (
        <Container>
            <Helmet>
                <title>Boxes</title>
            </Helmet>

            <Stack spacing={2}>
                <BoxListContainer/>
            </Stack>
        </Container>
    )
}

export default Boxes