"use client"

import { useEffect, useState } from "react";
import { Category } from "@/app/types";

export default function CategoryPage({params}: { params: { category: string }}) {

    const [category, setCategory] = useState<Category>({
        id: 0,
        name: "",
        route: "",
        createdAt: new Date(),
        updatedAt: new Date()
    });
    const categoryRoute = params.category;

    async function getCategoryDetails() {
        const response = await fetch(`/api/categories/${categoryRoute}`);
        const body = await response.json();
        setCategory(body.category);
    }

    useEffect(() => {
        getCategoryDetails();
    }, [category]);

    return (
        <h1>This is the {category.name} page!</h1>
    );
}