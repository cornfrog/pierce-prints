import AddItemToCart from "@/app/components/AddItemToCart";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs";

export default async function ItemPage({ params }: any) {

    const {userId, getToken} = auth();

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

    const signedOutItems = (
        <div>
            <p>Sign in to add this to your cart.</p>
        </div>
    );

    return (
        <>
            <a href={`/categories/${itemDetails.category.route}`}>{itemDetails.category.name}</a>
            <h1>{itemDetails.name}</h1>
            <p>Price: {formattedPrice}</p>
            <p>Description: {itemDetails.description}</p>
            <img src={itemDetails.imgSrc} alt="pic" />
            {userId ? <AddItemToCart /> : signedOutItems}
        </>
    );
}