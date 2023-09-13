import {Avatar, Paper, Stack} from "@mui/material";
import {AchievementType} from "../../@types/achievement.ts";
import {LazyLoadImage} from "react-lazy-load-image-component";
import Typography from "@mui/material/Typography";
import {formatDate} from "../../utils/dateFormatter.ts";

type AchievementItemProps = {
    achievement: AchievementType
}

const paperStyle = {
    height: '100%',
    p: 3,
    ":hover": {
        transform: 'scale(1.05)',
        transition: 'all 0.7s',
    },
}

const avatarStyle = (achievement: AchievementType) => ({
    width: 100,
    height: 100,
    filter: achievement.acquired ? 'none' : 'grayscale(100%)',
    opacity: achievement.acquired ? 1 : 0.3,
    border: achievement.acquired ? '2px solid lightblue' : '5px solid red',
    transition: 'all 0.3s',
    ":hover": {
        opacity: 1,
    },
})

export const AchievementItem = ({achievement}: AchievementItemProps) => {

    return (
        <Paper
            sx={paperStyle}>
            <Stack
                justifyContent='center'
                alignItems='center'
            >
                <Avatar
                    sx={avatarStyle(achievement)}>
                    <LazyLoadImage
                        src={achievement.image.url}
                        placeholderSrc={achievement.image.thumbnailUrl}
                        width={100}
                        height={100}
                        effect='blur'
                        alt="Image Alt"
                    />
                </Avatar>
                <Stack
                    sx={{
                        mt: 2
                    }}
                    justifyContent='center'
                    alignItems='center'>
                    <Typography
                        variant='subtitle1'>
                        {achievement.name}
                    </Typography>
                    <Typography
                        variant='body2'>
                        {achievement.description}
                    </Typography>
                    {achievement.acquiredAt && (
                        <Typography
                            variant='caption'
                            sx={{
                                opacity: .3
                            }}>
                            {formatDate(achievement.acquiredAt)}
                        </Typography>
                    )}
                </Stack>
            </Stack>
        </Paper>
    )
}