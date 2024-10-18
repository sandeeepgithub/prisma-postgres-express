/*
  Warnings:

  - A unique constraint covering the columns `[userId,postId]` on the table `Favourite` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "favouriteCount" INTEGER NOT NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "Favourite_userId_postId_key" ON "Favourite"("userId", "postId");
