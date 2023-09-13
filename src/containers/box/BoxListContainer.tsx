import {BoxList} from "../../components/box/BoxList.tsx";
import {useBoxListQuery} from "../../api/queries/box.ts";
import {LoadingProgressBar} from "../../components/base/progressBar/LoadingProgressBar.tsx";
import Page404 from "../../pages/Page404.tsx";
import {useCustomPaginationProps} from "../../hook/useCustomPaginationProps.ts";
import {CustomPagination} from "../../components/base/customPagination/CustomPagination.tsx";
import {BoxItemEventProps} from "../../components/box/BoxItem.tsx";
import {Box, LinearProgress, Stack} from "@mui/material";

type Props = BoxItemEventProps

export const BoxListContainer = ({...rest}: Props) => {
    const pagination = useCustomPaginationProps({
        itemsPerPage: 10
    })
    const {
        isLoading,
        isFetching,
        data
    } = useBoxListQuery(pagination.requestProps, {
            useErrorBoundary: true,
            keepPreviousData: true
        }
    )

    if (!data && isLoading) return <LoadingProgressBar/>
    if (!data) return <Page404/>

    return (
        <Stack spacing={2}>
            <CustomPagination
                total={data.total}
                {...pagination.props}
            />
            {isFetching && <LinearProgress/>}
            <Box>
                <BoxList
                    items={data.data}
                    {...rest}
                />
            </Box>
            <CustomPagination
                total={data.total}
                {...pagination.props}
            />
        </Stack>
    )
}
