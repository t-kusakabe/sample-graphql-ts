/*
  Warnings:

  - You are about to drop the column `timestanp` on the `prisma_test` table. All the data in the column will be lost.
  - Added the required column `timestamp` to the `prisma_test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "prisma_test" DROP COLUMN "timestanp",
ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL;
