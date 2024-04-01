import Link from "next/link";
import { CategoryTileProps } from "../types";

export default function CategoryTile({ category }: CategoryTileProps) {
    return (
        <Link href={`/categories/${category.route}`}>{category.name}</Link>
    );
}