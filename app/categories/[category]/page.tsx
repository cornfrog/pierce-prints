import { Category } from "@/app/types";
import prisma from "@/lib/prisma";
import ItemList from "@/app/components/ItemList";

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const categoryRoute = params.category;

    let categoryName;
    let categoryId;
    try {
        const category = await prisma.category.findFirst({
            where: {
                route: categoryRoute
            }
        });
        categoryName = category?.name;
        categoryId = category?.id;
    } catch (error) {
        console.log(error);
    }

    return (
        <>
            <h1 className="category-title">{categoryName}</h1>
            <ItemList categoryId={categoryId} />
        </>
    );
}