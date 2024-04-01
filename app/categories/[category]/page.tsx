"use client"

import { useEffect, useState } from "react";

type Category = {
    id?: number,
    name: string,
    route: string,
    createdAt?: Date,
    updatedAt?: Date
}

export default function CategoryPage({params}: { params: { category: string }}) {

    const [category, setCategory] = useState<Category>({
        name: "",
        route: ""
    });
    const categoryRoute = params.category;

    async function getCategoryDetails() {
        console.log("fetching data");
        const response = await fetch(`/api/categories/${categoryRoute}`);
        const body = await response.json();
        console.log(body);
        setCategory(body.category);
    }

    useEffect(() => {
        getCategoryDetails();
    }, []);

    return (
        <h1>This is the {category.name} page!</h1>
    );
}