import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log("Beginning DB Seed...");

    const catagories = await prisma.category.createMany({
        data: [
            {
                name: "Airsoft",
                route: "arisoft"
            },
            {
                name: "Desk Ornimates",
                route: "desk-ornimates"
            },
            {
                name: "Educational",
                route: "educational"
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