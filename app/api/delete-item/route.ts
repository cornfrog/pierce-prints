import prisma from "@/lib/prisma";

export async function DELETE(request: Request) {
    const data = await request.json();
    const userId = data.userId;
    const itemId = data.itemId;

    const removeItemFromCart = await prisma.cart.update({
        where: {
            user_id: userId
        },
        data: {
            items: {
                disconnect: {
                    id: itemId
                }
            }
        }
    });

    const countOfItems = await prisma.cart.findUnique({
        where: {
            user_id: userId
        },
        select: {
            _count: {
                select: {
                    items: true
                }
            }
        }
    })

    const numberOfItems = countOfItems!._count.items;
    if(numberOfItems < 1) {
        await prisma.cart.delete({
            where:{
                user_id: userId
            }
        })
    }

    return Response.json({ });
}