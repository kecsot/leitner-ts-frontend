import {useNavigate} from "react-router-dom";
import {DeckList} from "../../components/deck/DeckList";
import {useDeckListQuery} from "../../api/queries/deck";
import {LoadingProgressBar} from "../../components/base/LoadingProgressBar";
import Page404 from "../../pages/Page404.tsx";
import {DeckType} from "../../@types/deck.ts";
import {useCustomPaginationProps} from "../../hook/useCustomPaginationProps.ts";
import {CustomPagination} from "../../components/base/CustomPagination.tsx";

export const DeckListContainer = () => {
    const navigate = useNavigate();

    const pagination = useCustomPaginationProps({
        itemsPerPage: 10
    })
    const {isLoading, data} = useDeckListQuery(pagination.requestProps, {useErrorBoundary: true})

    const onItemClicked = (deck: DeckType) => {
        navigate('/decks/detail/' + deck.id)
    }

    if (isLoading) return <LoadingProgressBar/>
    if (!data) return <Page404/>

    return (
        <>
            <CustomPagination
                total={data.total}
                {...pagination.props}
            />
            <DeckList
                items={data.data}
                onViewItem={onItemClicked}
            />
        </>
    )
}
