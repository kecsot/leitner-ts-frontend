import {useParams} from "react-router-dom"
import {BoxDetailContainer} from "../../../containers/box/BoxDetailContainer.tsx"
import {BoxCardListContainer} from "../../../containers/card/BoxCardListContainer.tsx";
import Page404 from "../../Page404.tsx";
import {Container} from "@mui/material";
import {Helmet} from "react-helmet";

const BoxDetail = () => {
    const {id} = useParams();

    if (!id) return <Page404/>;

    return (
        <Container>
            <Helmet>
                <title>Box detail</title>
            </Helmet>

            <BoxDetailContainer boxId={Number(id)}/>
            <BoxCardListContainer boxId={Number(id)}/>
        </Container>
    )
}

export default BoxDetail