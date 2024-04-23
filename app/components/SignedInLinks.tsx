import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignedInLinks() {

    const [displayMenu, setDisplayMenu] = useState(false);

    function goToProfile() {
        return window.location.href = "/my-profile";
    }

    function goToCart() {
        return window.location.href = "/my-cart";
    }

    const router = useRouter();
    function handleLogOut() {
        router.push("/");
    }

    function showMenu() {
        setDisplayMenu(!displayMenu);
    }

    return (
        <>
        <button onClick={showMenu} className="my-account-btn">My Account</button>
        <div className={displayMenu ? "logged-in-buttons" : "logged-in-buttons-hide"}>
            <button className="profile-button" onClick={goToProfile}>My Profile</button>
            <button className="cart-button" onClick={goToCart}>My Cart</button>
            <SignOutButton signOutCallback={handleLogOut}>
                <button className="sign-out">Log Out</button>
            </SignOutButton>
        </div>
        </>
    );
}