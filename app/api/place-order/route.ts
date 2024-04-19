import { serializeOrderData } from "@/app/helpers";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {

    const data = await request.json();
    const userCart = data.cart;
    const orderTotal = data.total;

    const orderToAdd = serializeOrderData(userCart, parseFloat(orderTotal));

    const placeOrder = await prisma.order.create({
        data: {
            userId: orderToAdd.id,
            orderedItems: {
                create: orderToAdd.items.map((item: any) => ({
                    quantity: item.quantity,
                    item: {
                        connect: {
                            id: item.itemId
                        }
                    }
                }))
            },
            total: orderToAdd.total
        }
    })

    const clearUserCartItems = await prisma.cartItem.deleteMany({
        where: { cartId: orderToAdd.id }
    });

    const clearUserCart = await prisma.cart.delete({
        where: { user_id: orderToAdd.id }
    });

    return Response.json({placeOrder})
}