import {useNavigate} from "react-router-dom";
import {DeckList} from "../../components/deck/DeckList";
import {useDeckListQuery} from "../../api/queries/deck";
import {LoadingProgressBar} from "../../components/base/LoadingProgressBar";
import Page404 from "../../pages/Page404.tsx";
import {useErrorBoundary} from "react-error-boundary";
import {DeckType} from "../../@types/deck.ts";
import {useCustomPaginationProps} from "../../hook/useCustomPaginationProps.ts";
import {CustomPagination} from "../../components/base/CustomPagination.tsx";

export const DeckListContainer = () => {
    const {showBoundary} = useErrorBoundary()
    const navigate = useNavigate();

    const paginationProps = useCustomPaginationProps({
        itemsPerPage: 10
    })
    const {isLoading, isError, error, data} = useDeckListQuery(paginationProps.paginationRequestParams)

    const onItemClicked = (deck: DeckType) => {
        navigate('/decks/detail/' + deck.id)
    }

    if (isLoading) return <LoadingProgressBar/>
    if (isError) showBoundary(error)
    if (!data) return <Page404/>

    return (
        <>
            <CustomPagination
                total={data.total}
                {...paginationProps.paginationProps}
            />
            <DeckList
                items={data.data}
                onViewItem={onItemClicked}
            />
        </>
    )
}
