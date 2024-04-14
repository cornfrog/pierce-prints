import DeleteItem from "./DeleteItem";

type props = {
    item: any;
    userId: string;
}

export default function CartItem({ item, userId }: props) {
    return (
        <div className="cart-item">
            <img className="item-img" src={item.imgSrc} alt="cart-item-img" />
            <p className="item-name">{item.name}</p>
            <p className="item-price">${parseFloat(item.price)}</p>
            <DeleteItem itemId={item.id} userId={userId} />
        </div>
    );
}