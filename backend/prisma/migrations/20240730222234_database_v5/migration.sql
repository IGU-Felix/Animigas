/*
  Warnings:

  - Made the column `animeId` on table `comment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `comment` MODIFY `animeId` INTEGER NOT NULL;
