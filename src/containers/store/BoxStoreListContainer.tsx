import {StoreList} from "../../components/store/StoreList.tsx";
import {BoxType} from "../../@types/box.ts";
import {CustomPagination} from "../../components/base/customPagination/CustomPagination.tsx";
import {useCustomPaginationProps} from "../../hook/useCustomPaginationProps.ts";
import {useStoreItemListQuery} from "../../api/queries/store.ts";
import {StorePaginationRequestParams, StoreType} from "../../@types/store.ts";
import {useMemo} from "react";
import {LoadingProgressBar} from "../../components/base/progressBar/LoadingProgressBar.tsx";

export const BoxStoreListContainer = () => {
    const pagination = useCustomPaginationProps({itemsPerPage: 10})
    const requestProps: StorePaginationRequestParams = useMemo(() => {
        return {
            ...pagination.requestProps,
            type: StoreType.BOX
        }
    }, [pagination.requestProps])

    const {isLoading, data} = useStoreItemListQuery<BoxType>(requestProps, {useErrorBoundary: true})

    const renderItem = (item: BoxType) => {
        return (
            <div>
                <div>item id: {item.id}</div>
            </div>
        )
    }

    if (isLoading) return <LoadingProgressBar/>
    if (!data) return null

    return (
        <>
            <StoreList
                items={data.data}
                renderItem={renderItem}/>
            <CustomPagination
                total={data.total}
                {...pagination.props}
            />
        </>
    )
}
