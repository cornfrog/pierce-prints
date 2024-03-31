import Link from "next/link";

type props = {
    catagory: {
        id: number,
        name: string,
        route: string,
        createdAt: Date,
        updatedAt: Date
    }
}

export default function CatagoryTile({ catagory }: props) {
    return (
        <Link href={`/catagories/${catagory.route}`}>{catagory.name}</Link>
    );
}