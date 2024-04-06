import prisma from "@/lib/prisma";

export default async function ItemPage({ params }: any) {

    let itemDetails: any;
    try {
        itemDetails = await prisma.item.findFirst({
            where: {
                id: parseInt(params.item)
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
            <h1>item show page</h1>
            <p>This is: {itemDetails.name}</p>
            <p>Price: {formattedPrice}</p>
        </>
    );
}