/*
  Warnings:

  - You are about to drop the column `disable` on the `abouts` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `abouts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `abouts` DROP COLUMN `disable`,
    DROP COLUMN `image`;
