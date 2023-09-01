import {LoadingProgressBar} from "../../components/base/LoadingProgressBar.tsx";
import {useDeckCardListQuery} from "../../api/queries/deckCard.ts";
import Page404 from "../../pages/Page404.tsx";
import {CardList} from "../../components/card/CardList.tsx";
import {CustomPagination} from "../../components/base/CustomPagination.tsx";
import {useCustomPaginationProps} from "../../hook/useCustomPaginationProps.ts";

type Props = {
    deckId: number
}

export const DeckCardListContainer = ({deckId}: Props) => {
    const pagination = useCustomPaginationProps({
        itemsPerPage: 10
    })

    const {isLoading, data} = useDeckCardListQuery(deckId, pagination.requestProps, {useErrorBoundary: true});

    if (isLoading) return <LoadingProgressBar/>
    if (!data) return <Page404/>

    return (
        <>
            <CustomPagination
                total={data.total}
                {...pagination.props}
            />
            <CardList items={data.data}/>
        </>
    )
}
