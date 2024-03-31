"use client"

import { useEffect, useState } from "react";

type Catagory = {
    id?: number,
    name: string,
    route: string,
    createdAt?: Date,
    updatedAt?: Date
}

export default function CatagoryPage({params}: { params: { catagory: string }}) {

    const [catagory, setCatagory] = useState<Catagory>({
        name: "",
        route: ""
    });
    const catagoryRoute = params.catagory;

    async function getCatagoryDetails() {
        console.log("fetching data");
        const response = await fetch(`/api/catagories/${catagoryRoute}`);
        const body = await response.json();
        console.log(body);
        setCatagory(body.catagory);
    }

    useEffect(() => {
        getCatagoryDetails();
    }, []);

    return (
        <h1>This is the {catagory.name} page!</h1>
    );
}