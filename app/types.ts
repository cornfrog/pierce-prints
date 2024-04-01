export type Category = {
    id: number,
    name: string,
    route: string,
    createdAt: Date,
    updatedAt: Date
}

export type CategoryTileProps = {
    category: Category
}

