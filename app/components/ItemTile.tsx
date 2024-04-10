"use client"

import { usePathname } from "next/navigation";

type props = {
    itemId: number,
    itemName: string,
    itemPrice: number,
    itemPicture: string
}

export default function ItemTile({itemName, itemPrice, itemId, itemPicture}: props) {


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
            <img src={itemPicture} alt="item-picture" />
            <p className="item-name">{itemName}</p>
            <p className="item-price">Price: {formattedPrice}</p>
        </div>
    );
}