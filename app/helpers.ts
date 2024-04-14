export function parseZodError(zodErrors: any[]) {
    let errorMessages: any = {};
    zodErrors.forEach((zodError) => {
        const message = zodError.message.split(" ");
        message.shift();
        const messageString = message.join(" ");
        errorMessages[zodError.path[0]] = messageString;
    });
    return errorMessages;
}

export function serializeClerkUser(clerkUserData: any) {
    let clerkUser: any = {};
    clerkUser.id = clerkUserData.id
    clerkUser.firstName = clerkUserData.firstName;
    clerkUser.lastName = clerkUserData.lastName;
    clerkUser.email = clerkUserData.emailAddresses[0].emailAddress;

    return clerkUser;
}

type Order = {
    user_id: string,
    user_name: string,
    user_email: string,
    item_id: number,
    item_name: string,
    item_price: number
}
export function formatOrder(orderData: any) {
    let order: Order = {
        user_id: "",
        user_name: "",
        user_email: "",
        item_id: 0,
        item_name: "",
        item_price: 0
    };

    order.user_id = orderData.id;
    order.user_name = `${orderData.firstName} ${orderData.lastName}`;
    order.user_email = orderData.email;
    order.item_id = parseInt(orderData.itemId);
    order.item_name = orderData.itemName;
    order.item_price = parseFloat(orderData.itemPrice);

    console.log("Order Data: ", order);

}

export function serializeItemData(itemData: any) {
    let item: any = {};
    item.name = itemData.name;
    item.img = itemData.imgSrc;
    item.price = itemData.price
    return item
}