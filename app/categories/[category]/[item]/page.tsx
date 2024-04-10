import AddItemToCart from "@/app/components/AddItemToCart";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs";

export default async function ItemPage({ params }: any) {

    const { userId, getToken } = auth();

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
        <p className="signed-out">Sign in to add this to your cart.</p>
    );

    return (
        <div className="item-show">
            <a href={`/categories/${itemDetails.category.route}`} className="back-link">&lt;&lt;&lt; {itemDetails.category.name}</a>
            <h1 className="item-name">{itemDetails.name}</h1>
            <div className="item-details">
                <img src={itemDetails.imgSrc} alt="pic" className="item-picture" />
                <div className="item-price-and-desc">
                    <p className="item-price">Price: ${formattedPrice}</p>
                    <p className="item-description">Description: {itemDetails.description}</p>
                    {userId ? <AddItemToCart /> : signedOutItems}
                </div>
            </div>
        </div>
    );
}