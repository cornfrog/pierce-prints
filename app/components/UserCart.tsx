import { serializeItemData } from "../helpers";
import CartItem from "./CartItem";

type UserCart = {
    userCart: {
        user_id: string;
        items: any[]
    }
}

export default function UserCart({ userCart }: UserCart) {
        const cartTiles = userCart.items.map((item) => {
        return <CartItem item={item} userId={userCart.user_id} key={item.id}/>
    })

    return (
        <>
            {cartTiles}
        </>
    );
}