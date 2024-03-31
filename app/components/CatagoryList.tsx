"use client"

import { useEffect, useState } from "react";
import CatagoryTile from "./CatagoryTile";

type Catagory = {
    id: number,
    name: string,
    route: string,
    createdAt: Date,
    updatedAt: Date
}

export default function CatagoryList() {

    const [catagoryList, setCatagories] = useState<Catagory[]>([]);

    async function fetchCatagories() {
        const response = await fetch("/api/catagories/");
        const catagories = await response.json();
        setCatagories(catagories.catagories);
    }

    useEffect(() => {
        fetchCatagories();
    }, []);

    const catagoryTiles = catagoryList.map((catagory) => {
        return <li key={catagory.id}><CatagoryTile catagory={catagory}/></li>
    });

    return (
        <>
            <ul>
                {catagoryTiles}
            </ul>
        </>
    );
}