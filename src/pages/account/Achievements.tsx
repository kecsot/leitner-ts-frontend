import {Container} from "@mui/material";
import {Helmet} from "react-helmet";
import {AchievementListContainer} from "../../containers/achievement/AchievementListContainer.tsx";

const Achievements = () => {

    return (
        <Container>
            <Helmet>
                <title>Achievements</title>
            </Helmet>

            <AchievementListContainer/>
        </Container>
    )
}

export default Achievements;