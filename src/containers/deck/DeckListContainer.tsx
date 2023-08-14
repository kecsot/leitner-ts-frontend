import { useNavigate, useNavigation } from "react-router-dom";
import { DeckList } from "../../components/deck/DeckList";
import { useDeckListQuery } from "../../queries/deck";
import { DeckType } from "../../api/types";
import { routes } from "../../router";


export const DeckListContainer = () => {
    const navigate = useNavigate();
    const {isLoading, error, data} = useDeckListQuery()

    // TODO: errorBoundary



    const onItemClicked = (deck: DeckType) => {
       navigate('/decks/detail/' + deck.id)
    }

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {data?.data && 
                <DeckList 
                    items={data.data} 
                    onViewItem={onItemClicked} />
            }
        </>
    )
}
