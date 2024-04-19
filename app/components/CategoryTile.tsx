"use client"

import Link from "next/link";
import { CategoryTileProps } from "../types";

export default function CategoryTile({ category }: CategoryTileProps) {
    return (
        <Link href={`/categories/${category.route}`} className="category-link">{category.name}</Link>
    );
}