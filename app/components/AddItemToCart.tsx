"use client"

export default function AddItemToCart() {
    function addItemToCart() {
        alert("added to cart")
    }

    return (
        <button onClick={addItemToCart} className="add-to-cart">+ Add to Cart</button>
    );
}