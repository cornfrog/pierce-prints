/*
  Warnings:

  - Added the required column `description` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `price` on the `Item` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "description" TEXT NOT NULL,
DROP COLUMN "price",
ADD COLUMN     "price" MONEY NOT NULL;
