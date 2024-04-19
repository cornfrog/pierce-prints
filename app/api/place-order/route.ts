import { serializeOrderData } from "@/app/helpers";

export async function POST(request: Request) {
    
    const data = await request.json();
    const userCart = data.cart;
    const orderTotal = data.total;

    console.log(data)

    serializeOrderData(userCart, parseFloat(orderTotal))

    return Response.json({})
}