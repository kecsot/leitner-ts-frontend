import {BaseType} from "../../@types/base.ts";
import {Fragment, ReactNode} from "react";
import {StoreItemType} from "../../@types/store.ts";
import {StoreItemWrapper} from "./StoreItemWrapper.tsx";

type Props<T extends BaseType> = {
    items: StoreItemType<T>[]
    renderItem: (item: T) => ReactNode
}

export const StoreList = <T extends BaseType>({items, renderItem}: Props<T>) => {

    return (
        <>
            {items.map((storeItem) => (
                <Fragment key={storeItem.id}>
                    <StoreItemWrapper item={storeItem}>
                        {renderItem(storeItem.item)}
                    </StoreItemWrapper>
                </Fragment>
            ))}
        </>
    )
}
