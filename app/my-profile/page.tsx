import clerkClient from "@clerk/clerk-sdk-node";
import { auth } from "@clerk/nextjs";
import { serializeClerkUser } from "../helpers";

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

    return (
        <>
            <h1>Hi {serializedUser.firstName} {serializedUser.lastName}</h1>
        </>
    );
}