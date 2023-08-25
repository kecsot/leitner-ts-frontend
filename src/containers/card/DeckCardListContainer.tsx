import {LoadingProgressBar} from "../../components/base/LoadingProgressBar.tsx";
import {useDeckCardListQuery} from "../../api/queries/deckCard.ts";
import {useErrorBoundary} from "react-error-boundary";
import Page404 from "../../pages/Page404.tsx";
import {CardList} from "../../components/card/CardList.tsx";
import {CustomPagination} from "../../components/base/CustomPagination.tsx";
import {useCustomPaginationProps} from "../../hook/useCustomPaginationProps.ts";

type Props = {
    deckId: number
}

export const DeckCardListContainer = ({deckId}: Props) => {
    const {showBoundary} = useErrorBoundary()

    const paginationProps = useCustomPaginationProps({
        itemsPerPage: 10
    })
    const {isLoading, isError, error, data} = useDeckCardListQuery(deckId, paginationProps.paginationRequestParams);

    if (isLoading) return <LoadingProgressBar/>
    if (isError) showBoundary(error)
    if (!data) return <Page404/>

    return (
        <>
            <CustomPagination
                total={data.total}
                {...paginationProps.paginationProps}
            />
            <CardList items={data.data}/>
        </>
    )
}
