import { z } from "zod";
import { parseZodError } from "@/app/helpers";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
    const data = await request.json();
    const messageSchema = z.object({
        senderName: z.string().min(1),
        senderEmail: z.string().min(1),
        senderMessage: z.string().min(1)
    });
    try {
        messageSchema.parse(data);
        console.log("pass")
        await prisma.message.create({
            data:{
                senderName: data.senderName,
                senderEmail: data.senderEmail,
                senderMessage: data.senderMessage
            }
        });
        return Response.json({ });
    } catch (errors: any) {
        const errorList = parseZodError(errors.issues);
        return Response.json({errors: errorList});
    }
}