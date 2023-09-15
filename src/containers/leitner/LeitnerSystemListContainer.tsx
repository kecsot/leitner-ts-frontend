import Page404 from "../../pages/Page404.tsx";
import {useCustomPaginationProps} from "../../hook/useCustomPaginationProps.ts";
import {CustomPagination} from "../../components/base/customPagination/CustomPagination.tsx";
import {useLeitnerSystemListQuery} from "../../api/queries/leitner.ts";
import {LeitnerSystemList} from "../../components/leitner/LeitnerSystemList.tsx";
import {LinearProgress, Stack} from "@mui/material";

export const LeitnerSystemListContainer = () => {

    const pagination = useCustomPaginationProps({
        itemsPerPage: 9
    })

    const {
        isFetching,
        data
    } = useLeitnerSystemListQuery(pagination.requestProps, {
        suspense: true,
        useErrorBoundary: true,
        keepPreviousData: true,
    })

    if (!data) return <Page404/>

    return (
        <Stack spacing={2}>
            <CustomPagination
                total={data.total}
                {...pagination.props}
            />
            {isFetching && <LinearProgress/>}
            <LeitnerSystemList
                items={data.data}
            />
            {isFetching && <LinearProgress/>}
            <CustomPagination
                total={data.total}
                {...pagination.props}
            />
        </Stack>
    )
}
