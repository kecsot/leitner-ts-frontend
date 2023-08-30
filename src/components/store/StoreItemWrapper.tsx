import {BaseType} from "../../@types/base.ts";
import {ReactNode} from "react";
import {StoreItemType} from "../../@types/store.ts";

type Props<T extends BaseType> = {
    item: StoreItemType<T>
    children: ReactNode
}

export const StoreItemWrapper = <T extends BaseType>({item, children}: Props<T>) => {

    return (
        <div>
            <div>claimed: {item.claimedCount}</div>
            {children}
        </div>
    )
}
