/*
  Warnings:

  - Added the required column `user_id` to the `comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` ADD COLUMN `animeId` VARCHAR(191) NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL,
    MODIFY `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `signup` ADD COLUMN `imagem` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `comment` ADD CONSTRAINT `comment_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `signup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
