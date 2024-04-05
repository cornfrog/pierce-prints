"use client"

import { SignOutButton, UserButton, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from 'next/navigation';

type LoggedInUser = {
    userID: string | null
}

export default function TopBar({ userID }: LoggedInUser) {
    const goToHome = () => {
        return window.location.href = "/"
    };

    function goToProfile() {
        return window.location.href = "/my-profile";
    }

    const router = useRouter();
    function handleLogOut() {
        router.push("/");
    }

    const signedInItems = (
        <div className="logged-in-buttons">
        <button className="profile-button" onClick={goToProfile}>My Profile</button>
        <SignOutButton signOutCallback={handleLogOut}>
            <button className="sign-out">Log Out</button>
        </SignOutButton>
        </div>
    );


    const signedOutButton = (
        <SignInButton>
            <button className="sign-out">Sign In</button>
        </SignInButton>
    );

    return (
        <div className="top-bar">
            <h1 className="site-header" onClick={goToHome}>Pierce Prints</h1>
            <div className="navbar">
                <Link href="/" className="navbar__link">Home</Link>
                <Link href="/categories" className="navbar__link">Categories</Link>
                <Link href="/contact" className="navbar__link">Contact</Link>
                <Link href="/about" className="navbar__link">About</Link>
            </div>
            {userID ? signedInItems : signedOutButton}
        </div>
    );
}