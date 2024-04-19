import { clerkClient } from "@clerk/nextjs";
export async function DELETE(request: Request) {

    const requestData = await request.json();

    const clerkId = requestData.userId;

    try {
        await clerkClient.users.deleteUser(clerkId);
        return Response.json({message: "Account Deleted!"})
    } catch (error) {
        console.log(error);
        return Response.json({error: "Error deleting clerk account!"})

    }

}