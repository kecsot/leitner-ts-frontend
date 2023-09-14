import {AchievementType} from "../../@types/achievement.ts";
import {Paper, Stack} from "@mui/material";
import {formatDate} from "../../utils/dateFormatter.ts";

type AchievementListProps = {
    achievements: AchievementType[]
}

export const AchievementStatistics = ({achievements}: AchievementListProps) => {

    const numberOfAll = achievements.length;
    const acquiredAchievements = achievements.filter((achievement) => achievement.acquired);
    const numberOfAcquired = acquiredAchievements.length;

    const lastAcquired = acquiredAchievements
        .sort((a, b) => {
            const oldDate = new Date(0);
            const dateA = a.acquiredAt ?? oldDate;
            const dateB = b.acquiredAt ?? oldDate
            return dateB.getTime() - dateA.getTime();
        })[0] ?? undefined;

    const rarest = acquiredAchievements
        .sort((a, b) => {
            return a.acquirePercentageOfUsers - b.acquirePercentageOfUsers
        })[0] ?? undefined;

    return (
        <Paper sx={{p: 2}}>
            <Stack>
                <div>All Achievements: {numberOfAll.toString()}</div>
                <div>Acquired: {numberOfAcquired.toString()}</div>

                {lastAcquired && lastAcquired.acquiredAt && (
                    <div>Last acquired: {formatDate(lastAcquired.acquiredAt!)}</div>
                )}

                {rarest && (
                    <div>Rarest: {rarest.name}</div>
                )}
            </Stack>
        </Paper>
    )
}