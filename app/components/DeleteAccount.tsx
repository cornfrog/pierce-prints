"use client"

import { SignOutButton } from "@clerk/nextjs"

export default function DeleteAccount({ userId }: { userId: string | null }) {

    async function deleteAccount() {
        const deleteClerkAccount = fetch("/api/remove-account", {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({ userId })
        }).then(
            () => {
                window.location.href = "/";
            }
        );
    }
    
    return (
        <SignOutButton>
            <button className="delete-account" onClick={deleteAccount}>Delete Account</button>
        </SignOutButton>
    );
}