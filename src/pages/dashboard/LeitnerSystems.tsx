import {Container} from "@mui/material";
import {Helmet} from "react-helmet";
import {LeitnerSystemListContainer} from "../../containers/leitner/LeitnerSystemListContainer.tsx";


const LeitnerSystems = () => {

    return (
        <Container>
            <Helmet>
                <title>LeitnerSystems</title>
            </Helmet>

            <LeitnerSystemListContainer />
        </Container>
    )
}

export default LeitnerSystems;