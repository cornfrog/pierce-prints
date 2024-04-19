"use client"

import { useState } from "react";
import ItemAmountControls from "./ItemAmountControls";

type props = {
    userId: string,
    itemId: number,
    itemName: string;
}

export default function AddItemToCart({ userId, itemId , itemName}: props) {

    const [itemAmount, setAmount] = useState(1);
    const [showNotification, setShowNotification] = useState(false);

    async function addItemToCart() {
        const request = await fetch("/api/add-item/", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({ userId, itemId, itemAmount })
        })

        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 5000);
    }

    return (
        <>
            <ItemAmountControls itemAmount={itemAmount} setAmount={setAmount} />
            <button onClick={addItemToCart} className="add-to-cart">+ Add to Cart</button>
            {showNotification && (
                <div className="item-notification">
                    {itemAmount} {itemName}(s) added to cart!
                </div>
            )}
        </>
    );
}