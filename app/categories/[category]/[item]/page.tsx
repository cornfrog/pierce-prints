import prisma from "@/lib/prisma";

export default async function ItemPage({ params }: any) {

    let itemDetails: any;
    try {
        itemDetails = await prisma.item.findFirst({
            where: {
                id: parseInt(params.item)
            },
            include: {
                category: true
            }
        });
    } catch (error) {
        console.log(error);
    }

    const formattedPrice = itemDetails.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return (
        <>
            <a href={`/categories/${itemDetails.category.route}`}>{itemDetails.category.name}</a>
            <h1>{itemDetails.name}</h1>
            <p>Price: {formattedPrice}</p>
            <p>Description: {itemDetails.description}</p>
        </>
    );
}