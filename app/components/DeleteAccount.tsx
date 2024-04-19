"use client"

import { SignOutButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation";

export default function DeleteAccount({ userId }: { userId: string | null }) {

    async function deleteAccount() {
        const deleteClerkAccount = await fetch("/api/remove-account", {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({ userId })
        });
    }

    const router = useRouter()
    function handleLogOut() {
        router.push("/");
    }

    return (
        <SignOutButton signOutCallback={handleLogOut}>
            <button className="delete-account" onClick={deleteAccount}>Delete Account</button>
        </SignOutButton>
    );
}