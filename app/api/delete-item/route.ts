import prisma from "@/lib/prisma";

export async function DELETE(request: Request) {
    const data = await request.json();
    const userId = data.userId;
    const itemId = data.itemId;

    const deleteCartItem = await prisma.cartItem.delete({
        where: {
            id: itemId
        }
    })

    const countOfItems = await prisma.cart.findUnique({
        where: {
            user_id: userId
        },
        select: {
            _count: {
                select: {
                    cartItems: true
                }
            }
        }
    })

    const numberOfItems = countOfItems!._count.cartItems;
    if(numberOfItems < 1) {
        await prisma.cart.delete({
            where:{
                user_id: userId
            }
        })
    }

    return Response.json({ });
}