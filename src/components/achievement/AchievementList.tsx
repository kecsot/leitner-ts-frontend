import {AchievementType} from "../../@types/achievement.ts";
import {AchievementItem} from "./AchievementItem.tsx";
import {Grid} from "@mui/material";

type AchievementListProps = {
    achievements: AchievementType[]
}

export const AchievementList = ({achievements}: AchievementListProps) => {
    return (
        <Grid
            gap={2}
            container>
            {achievements.map((achievement) => (
                <Grid
                    item
                    key={achievement.id}
                    sx={{
                        width: 200,
                    }}>
                    <AchievementItem
                        achievement={achievement}/>
                </Grid>
            ))}
        </Grid>
    )
}