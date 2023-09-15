import {Container, Stack} from "@mui/material";
import {Helmet} from "react-helmet";
import {AchievementListContainer} from "../../containers/achievement/AchievementListContainer.tsx";
import {AchievementStatisticsContainer} from "../../containers/achievement/AchievementStatisticsContainer.tsx";

const Achievements = () => {

    return (
        <Container>
            <Helmet>
                <title>Achievements</title>
            </Helmet>

            <Stack spacing={2}>
                <AchievementStatisticsContainer/>
                <AchievementListContainer/>
            </Stack>
        </Container>
    )
}

export default Achievements;