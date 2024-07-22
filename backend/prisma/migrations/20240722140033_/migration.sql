/*
  Warnings:

  - You are about to drop the `signin` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `signin`;

-- CreateTable
CREATE TABLE `signup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password_hash` VARCHAR(191) NOT NULL,
    `adm` BOOLEAN NOT NULL,

    UNIQUE INDEX `signup_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
