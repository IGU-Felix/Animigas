-- AlterTable
ALTER TABLE `comment` MODIFY `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `animeId` VARCHAR(191) NULL;
