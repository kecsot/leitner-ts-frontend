import {Container} from "@mui/material";
import {Helmet} from "react-helmet";
import {PageContentContainer} from "../../containers/pageContent/PageContentContainer.tsx";

const TermsOfUse = () => {
    const key = import.meta.env.VITE_CONTENT_KEY_PRIVACY_POLICY || 'privacy-policy'

    return (
        <Container>
            <Helmet>
                <title>Privacy Policy</title>
            </Helmet>

            <PageContentContainer contentKey={key}/>
        </Container>
    )
}

export default TermsOfUse;