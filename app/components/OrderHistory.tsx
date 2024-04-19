import OrderedItem from "./OrderedItem";

export default function OrderHistory({ props }: any) {
    const orderPlaced = new Date(props.createdAt)
    const orderDate = orderPlaced.toLocaleDateString('en-us',
        {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric"
        });

    const totalAsFloat = parseFloat(props.total.toString());

    const orderedItems = props.orderedItems.map((item: any) => {
        return (
            <OrderedItem key={item.id} props={item}/>
        );
    })

    return (
        <div className="order-placed">
            <div className="order-header">
                <p className="order-date">Placed: {orderDate}</p>
                <p className="order-total">Total: ${totalAsFloat}</p>
            </div>
            <div className="ordered-items">
                {orderedItems}
            </div>
        </div>
    );
}