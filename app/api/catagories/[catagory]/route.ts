import prisma from "@/lib/prisma";

type CatagoryRoute = {
    params: {
        catagory: string
    }
}

export async function GET(request: Request, { params }: CatagoryRoute) {
    console.log("get catagory called!!!");
    console.log(params.catagory);
    const catagory = await prisma.category.findUnique({
        where: {
            route: params.catagory
        }
    });
    return Response.json({ catagory });
}