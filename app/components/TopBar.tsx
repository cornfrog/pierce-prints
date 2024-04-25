"use client"

import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import SignedInLinks from "./SignedInLinks";
import { useState } from "react";

type LoggedInUser = {
    userID: string | null
}

export default function TopBar({ userID }: LoggedInUser) {

    const [menuDisplayed, setMenuStatus] = useState(false);

    const goToHome = () => {
        return window.location.href = "/"
    };

    function updateMenu() {
        setMenuStatus(!menuDisplayed);
    }

    const signedInItems = (
        <SignedInLinks />
    );


    const signedOutButton = (
        <SignInButton>
            <button className="sign-in">Sign In</button>
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
                {userID ? signedInItems : signedOutButton}
            </div>
            <div className="mobile-navbar">
                <button className="mobile-menu-btn" onClick={updateMenu}>Menu</button>
                <div className={menuDisplayed ? "mobile-menu" : "mobile-menu-hide"}>
                    <Link href="/" className="navbar__link">Home</Link>
                    <Link href="/categories" className="navbar__link">Categories</Link>
                    <Link href="/contact" className="navbar__link">Contact</Link>
                    <Link href="/about" className="navbar__link">About</Link>
                    {userID ? signedInItems : signedOutButton}
                </div>
            </div>
        </div>
    );
}