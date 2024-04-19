import CategoryTile from "./CategoryTile";
import { Category } from "../types";
import prisma from "@/lib/prisma";

export default async function CategoryList() {

    const categoryList = await prisma.category.findMany();

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