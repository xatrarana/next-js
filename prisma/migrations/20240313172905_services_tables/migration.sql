/*
  Warnings:

  - You are about to alter the column `type` on the `services` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(3))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `services` MODIFY `type` VARCHAR(191) NOT NULL;
