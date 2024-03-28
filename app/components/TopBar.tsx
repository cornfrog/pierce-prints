"use client"

import Link from "next/link";
export default function TopBar() {

    const goToHome = () => {
        return window.location.href = "/"
    };

    return (
        <div className="top-bar">
            <h1 className="site-header" onClick={goToHome}>Pierce Prints</h1>
            <div className="navbar">
                <Link href="/" className="navbar__link">Home</Link>
                <Link href="/prints" className="navbar__link">Prints</Link>
                <Link href="/forum" className="navbar__link">Forum</Link>
                <Link href="/about" className="navbar__link">About</Link>
            </div>
        </div>
    );
}