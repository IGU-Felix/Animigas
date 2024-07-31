/*
  Warnings:

  - Added the required column `username` to the `comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` ADD COLUMN `username` VARCHAR(50) NOT NULL;
