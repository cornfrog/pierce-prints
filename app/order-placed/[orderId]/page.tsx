import OrderItemTile from "@/app/components/OrderItemTile";
import prisma from "@/lib/prisma";

export default async function OrderPlaced({ params }: any) {
    const orderId = params.orderId;

    const placedOrder = await prisma.order.findFirst({
        where: {
            id: orderId
        },
        include: {
            orderedItems: {
                include: {
                    item: true
                }
            }
        }
    });

    const totalAsFloat = parseFloat(placedOrder!.total.toString())
    const orderedItems = placedOrder?.orderedItems;

    const orderedItemTiles = orderedItems?.map((item) => {
        const priceAsFloat = parseFloat(item.item.price.toString());
        return (
            <OrderItemTile
                key={item.id}
                itemName={item.item.name}
                itemPrice={priceAsFloat}
                itemQuantity={item.quantity}
            />);
    })

    return (
        <div className="order-details">
            <h1 className="order-header">Thank you for placing your order.</h1>
            <p className="order-total">Total: ${totalAsFloat.toString()}</p>
            <div className="order-receipt">
                <p className="header">Quantity</p>
                <p className="header">Name</p>
                <p className="header">Price</p>
                {orderedItemTiles}
            </div>
        </div>
    );
}