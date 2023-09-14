import {Avatar, Badge, Paper, Stack} from "@mui/material";
import {AchievementType} from "../../@types/achievement.ts";
import {LazyLoadImage} from "react-lazy-load-image-component";
import Typography from "@mui/material/Typography";
import {formatDate} from "../../utils/dateFormatter.ts";
import {ReactNode} from "react";
import {ConditionalWrapper} from "../base/conditionalWrapper/ConditionalWrapper.tsx";
import DoneIcon from '@mui/icons-material/Done';

type AchievementItemProps = {
    achievement: AchievementType
}

const paperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    height: '100%',
    p: 2,
}

const avatarStyle = (achievement: AchievementType) => ({
    width: 100,
    height: 100,
    filter: achievement.acquired ? 'none' : 'grayscale(100%)',
    opacity: achievement.acquired ? 1 : 0.3,
    border: achievement.acquired ? '3px solid lightblue' : '3px solid red',
    transition: 'opacity 0.3s',
    ":hover": {
        opacity: 1,
    },
})

export const AchievementItem = ({achievement}: AchievementItemProps) => {

    return (
        <Paper
            sx={paperStyle}>

            <ConditionalWrapper
                condition={achievement.acquired}
                wrapper={(children: ReactNode) => (
                    <Badge badgeContent={<DoneIcon fontSize='small'/>}>
                        {children}
                    </Badge>
                )}
            >
                <Stack
                    spacing={2}
                    justifyContent='center'
                    alignItems='center'>
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
                        <Typography
                            variant='caption'
                            sx={{
                                opacity: .3
                            }}>
                            {`${achievement.acquirePercentageOfUsers}% of users acquired`}
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
            </ConditionalWrapper>

        </Paper>

    )
}