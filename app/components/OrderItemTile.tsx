type props = {
    itemQuantity: number;
    itemName: string;
    itemPrice: number;
}

export default function OrderItemTile({ itemQuantity, itemName, itemPrice }: props) {
    return (
        <>
            <p className="ordered-item-quantity">{itemQuantity}</p>
            <p className="ordered-item-name">{itemName}</p>
            <p className="ordered-item-price">${itemPrice}</p>
        </>
    )
}