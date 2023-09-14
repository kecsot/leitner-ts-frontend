import {Typography} from "@mui/material";
import {LeitnerSystemType} from "../../@types/leitner.ts";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

type Props = {
    item: LeitnerSystemType
}

export const LeitnerSystemLevelTimeline = ({item}: Props) => {

    return (
        <Timeline
            sx={{
                margin: 0,
                padding: 0,
            }}>

            {item.levels.map((level, index) => {
                const isLastItem = index === item.levels.length - 1;
                return (
                    <TimelineItem sx={{
                        minHeight: !isLastItem ? 45 : 0,
                    }}>
                        <TimelineOppositeContent sx={{flex: .25}}>
                            <Typography
                                variant='caption'
                                sx={{opacity: .4}}>
                                {`Box ${index + 1}`}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot/>
                            {!isLastItem && (
                                <TimelineConnector/>
                            )}
                        </TimelineSeparator>
                        <TimelineContent>{level.waitingTime}</TimelineContent>
                    </TimelineItem>
                )
            })}
        </Timeline>
    )
}
