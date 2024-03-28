import Link from "next/link";

export default function NavBar() {
    return (
        <ul className="navbar">
            <Link href="/" className="navbar__link">Home</Link>
            <Link href="/products" className="navbar__link">Products</Link>
            <Link href="/community" className="navbar__link">Community</Link>
            <Link href="/about" className="navbar__link">About</Link>
        </ul>
    );
}