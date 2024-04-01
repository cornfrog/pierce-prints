"use client"

import { useEffect, useState } from "react";
import CategoryTile from "./CategoryTile";

type Category = {
    id: number,
    name: string,
    route: string,
    createdAt: Date,
    updatedAt: Date
}

export default function CategoryList() {

    const [categoryList, setCatagories] = useState<Category[]>([]);

    async function fetchCatagories() {
        const response = await fetch("/api/categories/");
        const categories = await response.json();
        setCatagories(categories.categories);
    }

    useEffect(() => {
        fetchCatagories();
    }, []);

    const categoryTiles = categoryList.map((category) => {
        return <li key={category.id}><CategoryTile category={category}/></li>
    });

    return (
        <>
            <ul>
                {categoryTiles}
            </ul>
        </>
    );
}