"use client"

type props = {
    userId: string,
    itemId: number
}

export default function AddItemToCart({ userId, itemId }: props) {

    async function addItemToCart() {
        const request = await fetch("/api/add-item/", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({ userId, itemId })
        })
    }

    return (
        <button onClick={addItemToCart} className="add-to-cart">+ Add to Cart</button>
    );
}