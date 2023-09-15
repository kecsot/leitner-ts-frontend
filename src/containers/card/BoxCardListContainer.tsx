import {LoadingProgressBar} from "../../components/base/progressBar/LoadingProgressBar.tsx";
import {useBoxCardListQuery} from "../../api/queries/boxCard.ts";
import Page404 from "../../pages/Page404.tsx";
import {CardList} from "../../components/card/CardList.tsx";
import {CustomPagination} from "../../components/base/customPagination/CustomPagination.tsx";
import {useCustomPaginationProps} from "../../hook/useCustomPaginationProps.ts";
import {LinearProgress} from "@mui/material";

type Props = {
    boxId: number
}

export const BoxCardListContainer = ({boxId}: Props) => {
    const pagination = useCustomPaginationProps({
        itemsPerPage: 10
    })

    const {
        isLoading,
        isFetching,
        data
    } = useBoxCardListQuery(boxId, pagination.requestProps, {
        useErrorBoundary: true,
        keepPreviousData: true,
    });

    if (isLoading) return <LoadingProgressBar/>
    if (!data) return <Page404/>

    return (
        <>
            <CustomPagination
                total={data.total}
                {...pagination.props}
            />
            {isFetching && <LinearProgress/>}
            <CardList items={data.data}/>
        </>
    )
}
