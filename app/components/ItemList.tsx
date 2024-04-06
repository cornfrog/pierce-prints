import prisma from "@/lib/prisma";
import ItemTile from "./ItemTile";

type props = {
    categoryId: number | undefined,
}

export default async function ItemList({ categoryId }: props) {

    const currentCategoryId = categoryId;

    let categoryItems: any[] = [];
    try {
        categoryItems = await prisma.item.findMany({
            where: {
                categoryId: currentCategoryId
            }
        });
    } catch (error) {
        console.log(error);
    }

    const itemTiles = categoryItems.map((item) => {
        const priceAsFloat = parseFloat(item.price)
        return <ItemTile
            key={item.id}
            itemId={item.id}
            itemName={item.name}
            itemPrice={priceAsFloat}
        />
    });

    return (
        <div className="category-items">
            {itemTiles}
        </div>
    );
}