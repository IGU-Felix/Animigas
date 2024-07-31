/*
  Warnings:

  - The primary key for the `comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `comment` table. All the data in the column will be lost.
  - You are about to drop the column `user` on the `comment` table. All the data in the column will be lost.
  - Added the required column `commentId` to the `comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `comment_user_fkey`;

-- DropIndex
DROP INDEX `signup_name_key` ON `signup`;

-- AlterTable
ALTER TABLE `comment` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `user`,
    ADD COLUMN `commentId` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `user_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`commentId`);

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `signup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
