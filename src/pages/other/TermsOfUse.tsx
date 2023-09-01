import {Container} from "@mui/material";
import {Helmet} from "react-helmet";
import {PageContentContainer} from "../../containers/pageContent/PageContentContainer.tsx";

const TermsOfUse = () => {
    const key = import.meta.env.VITE_CONTENT_KEY_TERMS_OF_USE || 'terms-of-use'

    return (
        <Container>
            <Helmet>
                <title>Terms of use</title>
            </Helmet>

            <PageContentContainer contentKey={key}/>
        </Container>
    )
}

export default TermsOfUse;