import { Stack } from "@mui/material";
import {AchievementType} from "../../@types/achievement.ts";
import {AchievementItem} from "./AchievementItem.tsx";

type AchievementListProps = {
    achievements: AchievementType[]
}

export const AchievementList = ({achievements}: AchievementListProps) => {
    return (
        <Stack >
            {achievements.map((achievement) => (
                <AchievementItem
                    key={achievement.id}
                    achievement={achievement}/>
            ))}
        </Stack>
    )
}