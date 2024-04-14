-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "imgSrc" TEXT;

-- CreateTable
CREATE TABLE "Cart" (
    "user_id" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "_CartToItem" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CartToItem_AB_unique" ON "_CartToItem"("A", "B");

-- CreateIndex
CREATE INDEX "_CartToItem_B_index" ON "_CartToItem"("B");

-- AddForeignKey
ALTER TABLE "_CartToItem" ADD CONSTRAINT "_CartToItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Cart"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartToItem" ADD CONSTRAINT "_CartToItem_B_fkey" FOREIGN KEY ("B") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
