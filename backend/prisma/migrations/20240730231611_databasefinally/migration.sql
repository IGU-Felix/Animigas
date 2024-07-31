/*
  Warnings:

  - The primary key for the `comment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `commentId` on the `comment` table. All the data in the column will be lost.
  - Added the required column `comment_id` to the `comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` DROP PRIMARY KEY,
    DROP COLUMN `commentId`,
    ADD COLUMN `comment_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`comment_id`);
