import {Container} from "@mui/material";
import {Helmet} from "react-helmet";

const Page404 = () => {

    return (
        <Container>
            <Helmet>
                <title>Page Not Found</title>
            </Helmet>

            <div>404</div>
        </Container>
    )
}

export default Page404;