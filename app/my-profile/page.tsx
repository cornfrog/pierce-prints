import clerkClient from "@clerk/clerk-sdk-node";
import { auth } from "@clerk/nextjs";
import { serializeClerkUser } from "../helpers";
import prisma from "@/lib/prisma";
import OrderHistory from "../components/OrderHistory";

export default async function MyProfile() {
    const { userId, getToken } = auth();
    let currentUserID;
    if (userId) {
        currentUserID = userId;
    } else {
        currentUserID = "";
    }
    const user = await clerkClient.users.getUser(currentUserID);

    const serializedUser = serializeClerkUser(user);

    const orders = await prisma.order.findMany({
        where: { userId: userId! },
        orderBy: {
            createdAt: 'desc'
        },
        include: {
            orderedItems: {
                include: {
                    item: true
                }
            }
        }
    })

    const orderHistory = orders.map((order) => {
        return (
            <OrderHistory key={order.id} props={order} />
        );
    });

    return (
        <div className="profile-page">
            <h1>Hi {serializedUser.firstName} {serializedUser.lastName}</h1>
            <a href="/profile-settings" className="setting-link">Settings</a>
            <div className="order-history">
                <h1 className="list-header">Order History</h1>
                {orderHistory}
            </div>
        </div>
    );
}