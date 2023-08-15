import { useNavigate } from "react-router-dom";
import { DeckList } from "../../components/deck/DeckList";
import { useDeckListQuery } from "../../queries/deck";
import { DeckType } from "../../api/types";
import { LoadingProgressBar } from "../../components/base/LoadingProgressBar";

export const DeckListContainer = () => {
    const navigate = useNavigate();
    const { isLoading, error, data } = useDeckListQuery()

    const onItemClicked = (deck: DeckType) => {
        navigate('/decks/detail/' + deck.id)
    }

    return (
        <>
            <LoadingProgressBar 
                isLoading={isLoading}/>

            {data?.data &&
                <DeckList
                    items={data.data}
                    onViewItem={onItemClicked} />
            }
        </>
    )
}
