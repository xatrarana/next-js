-- CreateTable
CREATE TABLE `NavContent` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `logoImage` VARCHAR(191) NOT NULL,
    `companyMotto` VARCHAR(191) NOT NULL,
    `companyName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `contactNumbers` JSON NOT NULL,
    `emails` JSON NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SocialLinks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `facebook` VARCHAR(191) NULL,
    `youtube` VARCHAR(191) NULL,
    `twitter` VARCHAR(191) NULL,
    `whatsApp` VARCHAR(191) NULL,
    `navContentId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContactNumber` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `number` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SocialLinks` ADD CONSTRAINT `SocialLinks_navContentId_fkey` FOREIGN KEY (`navContentId`) REFERENCES `NavContent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
