import {BoxList} from "../../components/box/BoxList.tsx";
import {useBoxListQuery} from "../../api/queries/box.ts";
import {LoadingProgressBar} from "../../components/base/progressBar/LoadingProgressBar.tsx";
import Page404 from "../../pages/Page404.tsx";
import {useCustomPaginationProps} from "../../hook/useCustomPaginationProps.ts";
import {CustomPagination} from "../../components/base/customPagination/CustomPagination.tsx";
import {BoxItemEventProps} from "../../components/box/BoxItem.tsx";

type Props = BoxItemEventProps

export const BoxListContainer = ({...rest}: Props) => {
    const pagination = useCustomPaginationProps({
        itemsPerPage: 10
    })
    const {
        isLoading,
        data
    } = useBoxListQuery(pagination.requestProps, {
            useErrorBoundary: true,
            keepPreviousData: true
        }
    )
    
    if (isLoading) return <LoadingProgressBar/>
    if (!data) return <Page404/>

    return (
        <>
            <CustomPagination
                total={data.total}
                {...pagination.props}
            />
            <BoxList
                items={data.data}
                {...rest}
            />
        </>
    )
}
