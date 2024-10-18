/*
  Warnings:

  - You are about to drop the column `isAdmin` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `preferences` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_name_email_idx";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isAdmin",
DROP COLUMN "preferences";

-- CreateIndex
CREATE INDEX "Post_id_title_idx" ON "Post"("id", "title");

-- CreateIndex
CREATE INDEX "User_name_email_id_idx" ON "User"("name", "email", "id");
