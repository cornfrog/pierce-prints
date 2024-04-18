import { serializeItemData } from "../helpers";
import CartItem from "./CartItem";

type UserCart = {
    userCart: {
        user_id: string;
        cartItems: any[]
    }
}

export default function UserCart({ userCart }: UserCart) {
    const cartTiles = userCart.cartItems.map((cartItem) => {
        return <CartItem item={cartItem} userId={userCart.user_id} key={cartItem.id} />
    })

    return (
        <>
            {cartTiles}
        </>
    );
}