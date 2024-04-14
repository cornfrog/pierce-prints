import prisma from "@/lib/prisma";

export async function POST(request: Request) {
    const requestData = await request.json()
    const userId = requestData.userId;
    const itemId = requestData.itemId;

    const result = await prisma.cart.upsert({
        where: {user_id: userId},
        update: {
            items:{
                connect:{
                    id: parseInt(itemId)
                }
            }
        },
        create: {
            user_id: userId,
            items: {
                connect: {
                    id: parseInt(itemId)
                }
            }
        }
    })

    console.log(result);

    return Response.json({});
}