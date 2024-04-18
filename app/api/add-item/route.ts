import prisma from "@/lib/prisma";

export async function POST(request: Request) {

    const requestData = await request.json()
    const userId = requestData.userId;
    const itemId = requestData.itemId;
    const itemAmount = requestData.itemAmount;

    const userCartExists = await prisma.cart.findFirst({
        where:{
            user_id: userId
        }
    });

    if(!userCartExists) {
        await prisma.cart.create({
            data:{
                user_id: userId
            }
        })
    }

    const itemInUserCart = await prisma.cartItem.findFirst({
        where: {
            cartId: userId,
            itemId: parseInt(itemId)
        }
    });

    if(!itemInUserCart){
        await prisma.cartItem.create({
            data: {
                cartId: userId,
                itemId: parseInt(itemId),
                quantity: parseInt(itemAmount)
            }
        });
    } else {
        await prisma.cartItem.update({
            where: {
                id: itemInUserCart.id
            },
            data: {
                quantity: itemInUserCart.quantity + parseInt(itemAmount)
            }
        });
    }

    return Response.json({});
}