/*
  Warnings:

  - You are about to drop the column `user_id` on the `comment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `signup` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user` to the `comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `comment` DROP FOREIGN KEY `comment_user_id_fkey`;

-- AlterTable
ALTER TABLE `comment` DROP COLUMN `user_id`,
    ADD COLUMN `user` VARCHAR(50) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `signup_name_key` ON `signup`(`name`);

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_user_fkey` FOREIGN KEY (`user`) REFERENCES `signup`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
