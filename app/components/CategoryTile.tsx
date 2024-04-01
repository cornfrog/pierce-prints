import Link from "next/link";

type props = {
    category: {
        id: number,
        name: string,
        route: string,
        createdAt: Date,
        updatedAt: Date
    }
}

export default function CategoryTile({ category }: props) {
    return (
        <Link href={`/categories/${category.route}`}>{category.name}</Link>
    );
}