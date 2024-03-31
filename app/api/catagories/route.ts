import prisma from "@/lib/prisma";

export async function GET() {
    const catagories = await prisma.category.findMany();
    return Response.json({ catagories }); 
}