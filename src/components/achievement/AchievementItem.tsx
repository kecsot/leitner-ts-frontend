import {AchievementType} from "../../@types/achievement.ts";

type AchievementItemProps = {
    achievement: AchievementType
}

export const AchievementItem = ({achievement}: AchievementItemProps) => {
    return (
        <div>
            {achievement.name}
            {achievement.description}

            {achievement.acquired.toString()}
            {achievement.acquiredAt?.toISOString()}
        </div>
    )
}