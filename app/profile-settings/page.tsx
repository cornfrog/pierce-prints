import clerkClient from "@clerk/clerk-sdk-node";
import { auth } from "@clerk/nextjs";
import { serializeClerkUser } from "../helpers";
import DeleteAccount from "../components/DeleteAccount";


export default async function ProfileSettings() {
    const { userId, getToken } = auth();
    let currentUserID;
    if (userId) {
        currentUserID = userId;
    } else {
        currentUserID = "";
    }
    const user = await clerkClient.users.getUser(currentUserID);

    const serializedUser = serializeClerkUser(user);

    const createdAtDate = new Date(serializedUser.createdAt);

    return (
        <div className="account-settings">
            <h1>Account Settings:</h1>
            <p>First Name: {serializedUser.firstName}</p>
            <p>Last Name: {serializedUser.lastName}</p>
            <p>Email: {serializedUser.email}</p>
            <p>Created: {createdAtDate.toLocaleDateString()}</p>
            <DeleteAccount userId={userId}/>
        </div>
    );
}