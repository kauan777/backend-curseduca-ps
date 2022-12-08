/*
  Warnings:

  - You are about to drop the column `description` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `post` table. All the data in the column will be lost.
  - You are about to drop the `comment` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `content` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `Comment_postId_fkey`;

-- AlterTable
ALTER TABLE `post` DROP COLUMN `description`,
    DROP COLUMN `title`,
    ADD COLUMN `content` VARCHAR(191) NOT NULL,
    ADD COLUMN `imagePath` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `comment`;
