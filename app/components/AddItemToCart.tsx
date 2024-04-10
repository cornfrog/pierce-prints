"use client"

export default function AddItemToCart() {
    function addItemToCart() {
        alert("added to cart")
    }

    return (
        <button onClick={addItemToCart}>Add to Cart</button>
    );
}