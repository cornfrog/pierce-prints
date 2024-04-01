"use client"

import { useEffect, useState } from "react";
import CategoryTile from "./CategoryTile";
import { Category } from "../types";

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
        return <li key={category.id} className="category-tile"><CategoryTile category={category}/></li>
    });

    return (
        <>
            <ul className="category-list">
                {categoryTiles}
            </ul>
        </>
    );
}