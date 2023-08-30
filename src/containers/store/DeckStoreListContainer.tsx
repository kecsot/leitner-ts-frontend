import {StoreList} from "../../components/store/StoreList.tsx";
import {DeckType} from "../../@types/deck.ts";
import {CustomPagination} from "../../components/base/CustomPagination.tsx";
import {useCustomPaginationProps} from "../../hook/useCustomPaginationProps.ts";
import {useStoreItemListQuery} from "../../api/queries/store.ts";
import {StorePaginationRequestParams, StoreType} from "../../@types/store.ts";
import {useMemo} from "react";
import {LoadingProgressBar} from "../../components/base/LoadingProgressBar.tsx";

export const DeckStoreListContainer = () => {
    const pagination = useCustomPaginationProps({itemsPerPage: 10})
    const requestProps: StorePaginationRequestParams = useMemo(() => {
        return {
            ...pagination.requestProps,
            type: StoreType.DECK
        }
    }, [pagination.requestProps])

    const {isLoading, data} = useStoreItemListQuery<DeckType>(requestProps, {useErrorBoundary: true})

    const renderItem = (item: DeckType) => {
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
