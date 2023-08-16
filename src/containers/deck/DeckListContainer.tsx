import {useNavigate} from "react-router-dom";
import {DeckList} from "../../components/deck/DeckList";
import {useDeckListQuery} from "../../queries/deck";
import {DeckType} from "../../api/types";
import {LoadingProgressBar} from "../../components/base/LoadingProgressBar";
import Page404 from "../../pages/Page404.tsx";
import {useErrorBoundary} from "react-error-boundary";

export const DeckListContainer = () => {
    const {showBoundary} = useErrorBoundary()
    const navigate = useNavigate();
    const {isLoading, isError, error, data} = useDeckListQuery()

    const onItemClicked = (deck: DeckType) => {
        navigate('/decks/detail/' + deck.id)
    }

    if (isLoading) return <LoadingProgressBar/>
    if (isError) showBoundary(error)
    if (!data) return <Page404/>

    return (
        <DeckList
            items={data.data}
            onViewItem={onItemClicked}/>
    )
}
