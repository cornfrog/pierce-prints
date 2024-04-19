"use client"

export default function PlaceOrder({ order }: any) {

    const cartItems = order.cartItems;

    let total = 0;
    cartItems.forEach((item: any) => {
        const itemPrice = parseFloat(item.item.price);
        total = total + (item.quantity * itemPrice);
    })

    const displayedTotal = total.toFixed(2)

    async function placeOrder() {
        const response = await fetch("/api/place-order/", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({ cart: cartItems, total: displayedTotal })
        });
        const responseData = await response.json();
        return window.location.href = `/order-placed/${responseData.placeOrder.id}`;
    }

    return (
        <button onClick={placeOrder} className="place-order-btn">Place Order - <span className="total-text">Total: ${displayedTotal}</span></button>
    );
}