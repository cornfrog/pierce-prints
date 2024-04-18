import { auth } from "@clerk/nextjs";
import prisma from "@/lib/prisma";
import UserCart from "../components/UserCart";

export default async function MyCart() {

    const { userId, getToken } = auth();

    const userCart = await prisma.cart.findMany({
        where: {
            user_id: userId?.toString()
        },
        include: {
            cartItems: {
                include: {
                    item: true
                }
            }
        }
    })
    
    const noCartItems = (
        <p className="signed-out-msg">No Items in Cart</p>
    );

    const cartItems = (
        <>
            <UserCart userCart={userCart[0]} />
        </>
    );

    return (
        <div className="cart-page">
            <h1 className="page-title">My Cart Items</h1>
            {userCart.length != 0 ? cartItems : noCartItems}
        </div>
    );
}