import prisma from "@/lib/prisma";

type CategoryRoute = {
    params: {
        category: string
    }
}

export async function GET(request: Request, { params }: CategoryRoute) {
    const category = await prisma.category.findUnique({
        where: {
            route: params.category
        }
    });
    console.log(category);
    return Response.json({ category });
}