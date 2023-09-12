import {LoadingProgressBar} from "../../components/base/progressBar/LoadingProgressBar.tsx";
import Page404 from "../../pages/Page404.tsx";
import {useCustomPaginationProps} from "../../hook/useCustomPaginationProps.ts";
import {CustomPagination} from "../../components/base/customPagination/CustomPagination.tsx";
import {useLeitnerSystemListQuery} from "../../api/queries/leitner.ts";
import {LeitnerSystemList} from "../../components/leitner/LeitnerSystemList.tsx";

export const LeitnerSystemListContainer = () => {
    const pagination = useCustomPaginationProps({
        itemsPerPage: 10
    })
    const {
        isLoading,
        data
    } = useLeitnerSystemListQuery(pagination.requestProps, {
        useErrorBoundary: true,
        keepPreviousData: true,
    })

    if (isLoading) return <LoadingProgressBar/>
    if (!data) return <Page404/>

    return (
        <>
            <CustomPagination
                total={data.total}
                {...pagination.props}
            />
            <LeitnerSystemList
                items={data.data}
            />
        </>
    )
}
