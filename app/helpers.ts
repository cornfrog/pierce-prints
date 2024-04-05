export function parseZodError(zodErrors: any[]){
    let errorMessages: any = {};
    zodErrors.forEach((zodError) => {
        const message = zodError.message.split(" ");
        message.shift();
        const messageString = message.join(" ");
        errorMessages[zodError.path[0]] = messageString;
    });
    return errorMessages;
}