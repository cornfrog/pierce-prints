import prisma from "@/lib/prisma";
import CategoryList from "../components/CategoryList";
import CategoryTile from "../components/CategoryTile";

export default async function Categories() {
  const categoryList = await prisma.category.findMany();

  const categoryTiles = categoryList.map((category) => {
    return <li key={category.id} className="category-tile"><CategoryTile category={category} /></li>
  });
  
  return (
    <>
      <div className="separator-container">
        <div className="separator-container__bar"></div>
        <h1 className="separator-container__text">Categories</h1>
        <div className="separator-container__bar"></div>
      </div>
      <ul className="category-list">
        {categoryTiles}
      </ul>
    </>
  );
}
