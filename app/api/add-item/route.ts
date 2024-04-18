import prisma from "@/lib/prisma";

export async function POST(request: Request) {
    const requestData = await request.json()
    const userId = requestData.userId;
    const itemId = requestData.itemId;
    const itemAmount = requestData.itemAmount;

    const userCartItems = await prisma.cartItem.findFirst({
        where: {
            cartId: userId,
            itemId: parseInt(itemId)
        },
        include: {
            item: true
        }
    })

    console.log(userCartItems)

    const cart = await prisma.cart.upsert({
        where: { user_id: userId },
        update: {},
        create: { 
            user_id: userId,
            cartItems: {
                create: {
                    itemId: parseInt(itemId),
                    quantity: parseInt(itemAmount),
                }
            }
        }
    })

    console.log(cart)

    return Response.json({});
}