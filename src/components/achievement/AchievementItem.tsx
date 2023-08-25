import {Avatar} from "@mui/material";
import {AchievementType} from "../../@types/achievement.ts";
import {LazyLoadImage} from "react-lazy-load-image-component";

type AchievementItemProps = {
    achievement: AchievementType
}

export const AchievementItem = ({achievement}: AchievementItemProps) => {

    const getImageByAchievementKey = (key: string) => {
        // TODO: get thumbnail by achievement key
        return `https://picsum.photos/100/100?random=${key}` + Math.random()
    }

    const getThumbnailByAchievementKey = (key: string) => {
        // TODO: get thumbnail by achievement key
        return `https://picsum.photos/20/20?random=${key}` + Math.random()
    }

    return (
        <div>
            <Avatar
                sx={{
                    width: 100,
                    height: 100,
                    filter: achievement.acquired ? 'none' : 'grayscale(100%)',
                    opacity: achievement.acquired ? 1 : 0.2,
                    border: achievement.acquired ? '2px solid yellow' : '5px solid red'
                }}
            >
                <LazyLoadImage src={getImageByAchievementKey(achievement.key)}
                               placeholderSrc={getThumbnailByAchievementKey(achievement.key)}
                               width={100}
                               height={100}
                               effect='blur'
                               alt="Image Alt"
                />
            </Avatar>
            <div>{achievement.name}</div>
            <div>{achievement.description}</div>
            <div>{achievement.acquired.toString()}</div>
            <div>{achievement.acquiredAt?.toISOString()}</div>
        </div>
    )
}