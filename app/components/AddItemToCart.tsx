"use client"

import { useState } from "react";
import ItemAmountControls from "./ItemAmountControls";

type props = {
    userId: string,
    itemId: number
}

export default function AddItemToCart({ userId, itemId }: props) {

    const [itemAmount, setAmount] = useState(1);

    async function addItemToCart() {
        const request = await fetch("/api/add-item/", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({ userId, itemId, itemAmount })
        })
    }

    return (
        <>
            <ItemAmountControls itemAmount={itemAmount} setAmount={setAmount}/>
            <button onClick={addItemToCart} className="add-to-cart">+ Add to Cart</button>
        </>
    );
}