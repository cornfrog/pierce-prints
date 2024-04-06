"use client"

import { usePathname } from "next/navigation";

type props = {
    itemId: number,
    itemName: string,
    itemPrice: number,
}

export default function ItemTile({itemName, itemPrice, itemId}: props) {


    const formattedPrice = itemPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const currentPath = usePathname();
    function goToShowPage() {
        return window.location.href = `${currentPath}/${itemId}`
    }

    return (
        <div className="item-tile" onClick={goToShowPage}>
            <p className="item-name">{itemName}</p>
            <p className="item-price">Price: {formattedPrice}</p>
        </div>
    );
}