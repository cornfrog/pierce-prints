import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log("Beginning DB Seed...");

    const catagories = await prisma.category.createMany({
        data: [
            {
                name: "Airsoft",
                route: "airsoft"
            },
            {
                name: "Desk Ornament",
                route: "desk-ornament"
            },
            {
                name: "Educational",
                route: "educational"
            },
            {
                name: "Pet Toys",
                route: "pet-toys"
            }
        ]
    });

    console.log({ catagories });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })